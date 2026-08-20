import type { ReactNode } from "react";

type ArticleNode =
  | { type: "heading"; level: 2 | 3 | 4 | 5; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

const sentenceEnding = /[.!;]$/;
const numberedLabel = /^(?:0?[1-9]|[1-9][0-9])[.)]?\s*(.*)$/;
const bulletPrefix = /^(?:[-–—•▪◦*]|✓)\s+/;

function isAllCaps(text: string) {
  const letters = text.match(/[A-Za-z]/g) ?? [];
  return letters.length >= 4 && letters.every((letter) => letter === letter.toUpperCase());
}

function looksLikeHeading(text: string) {
  if (!text || text.length > 105 || sentenceEnding.test(text)) return false;
  if (/^(?:https?:\/\/|www\.)/i.test(text)) return false;
  if (isAllCaps(text)) return true;
  if (text.endsWith("?")) return true;

  const words = text.split(/\s+/);
  if (words.length > 12) return false;
  const significant = words.filter((word) => word.length > 3);
  const titled = significant.filter((word) => /^[A-Z£“‘]/.test(word));
  return significant.length > 0 && titled.length / significant.length >= 0.6;
}

function headingLevel(text: string, currentLevel: 2 | 3 | 4 | 5): 2 | 3 | 4 | 5 {
  if (numberedLabel.test(text)) return 3;
  if (text.endsWith("?")) return currentLevel >= 3 ? 4 : 3;
  if (isAllCaps(text) && text.length <= 34 && currentLevel >= 3) return 4;
  if (isAllCaps(text) && text.length <= 68 && currentLevel === 2) return 3;
  return 2;
}

function labelledItem(text: string) {
  const match = text.match(/^([^:]{2,48}):\s+(.{10,})$/);
  return match ? text : null;
}

function splitSource(content: string[]) {
  return content.flatMap((block) =>
    block
      .replace(/\r/g, "")
      .split(/\n{2,}/)
      .map((part) => part.trim())
      .filter(Boolean),
  );
}

function buildArticleNodes(content: string[], title: string): ArticleNode[] {
  const parts = splitSource(content);
  const draft: Array<ArticleNode | { type: "list-item"; text: string }> = [];
  let currentLevel: 2 | 3 | 4 | 5 = 2;

  for (const part of parts) {
    const lines = part
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    if (lines.length >= 3 && lines.every((line) => line.length < 180)) {
      const [first, ...rest] = lines;
      if (looksLikeHeading(first)) {
        const level = headingLevel(first, currentLevel);
        if (first.toLocaleLowerCase() !== title.toLocaleLowerCase()) {
          draft.push({ type: "heading", level, text: first.replace(numberedLabel, "$1") });
          currentLevel = level;
        }
        rest.forEach((line) =>
          draft.push({ type: "list-item", text: line.replace(bulletPrefix, "") }),
        );
        continue;
      }
      lines.forEach((line) =>
        draft.push({ type: "list-item", text: line.replace(bulletPrefix, "") }),
      );
      continue;
    }

    if (lines.length === 1 && looksLikeHeading(part)) {
      if (part.toLocaleLowerCase() === title.toLocaleLowerCase()) continue;
      const level = headingLevel(part, currentLevel);
      draft.push({ type: "heading", level, text: part.replace(numberedLabel, "$1") });
      currentLevel = level;
      continue;
    }

    if (lines.length === 1 && (bulletPrefix.test(part) || labelledItem(part))) {
      draft.push({ type: "list-item", text: part.replace(bulletPrefix, "") });
      continue;
    }

    if (/^[“"]/.test(part) && /[”"](?:\s|$)/.test(part)) {
      draft.push({ type: "quote", text: part.replace(/^['"“]|['"”]$/g, "") });
      continue;
    }

    draft.push({ type: "paragraph", text: lines.join(" ") });
  }

  const nodes: ArticleNode[] = [];
  for (let index = 0; index < draft.length; index += 1) {
    const node = draft[index];
    if (node.type !== "list-item") {
      nodes.push(node);
      continue;
    }

    const items = [node.text];
    while (draft[index + 1]?.type === "list-item") {
      index += 1;
      items.push((draft[index] as { type: "list-item"; text: string }).text);
    }
    nodes.push(items.length > 1 ? { type: "list", items } : { type: "paragraph", text: items[0] });
  }

  return nodes;
}

function richText(text: string): ReactNode {
  const match = text.match(/^([^:]{2,48}):\s+(.+)$/);
  if (!match) return text;
  return (
    <>
      <strong className="font-semibold text-[#102845]">{match[1]}:</strong> {match[2]}
    </>
  );
}

const headingClasses = {
  2: "mt-14 border-t border-[#102845]/15 pt-8 font-serif text-3xl font-semibold leading-tight text-[#102845] sm:text-4xl",
  3: "mt-10 font-serif text-2xl font-semibold leading-tight text-[#102845] sm:text-3xl",
  4: "mt-8 text-lg font-bold leading-snug text-[#102845] sm:text-xl",
  5: "mt-6 text-base font-bold uppercase tracking-wide text-[#516274]",
};

export function ArchivedArticleBody({ content, title }: { content: string[]; title: string }) {
  const nodes = buildArticleNodes(content, title);

  return (
    <div className="space-y-5 text-base leading-8 text-slate-700 sm:text-[1.05rem]">
      {nodes.map((node, index) => {
        const key = `${node.type}-${index}`;
        if (node.type === "heading") {
          const Heading = `h${node.level}` as "h2" | "h3" | "h4" | "h5";
          return (
            <Heading key={key} className={headingClasses[node.level]}>
              {node.text}
            </Heading>
          );
        }
        if (node.type === "list") {
          return (
            <ul
              key={key}
              className="my-6 list-disc space-y-3 rounded bg-white/70 px-6 py-5 pl-10 marker:text-[#b99a60]"
            >
              {node.items.map((item, itemIndex) => (
                <li key={`${key}-${itemIndex}`} className="pl-1">
                  {richText(item)}
                </li>
              ))}
            </ul>
          );
        }
        if (node.type === "quote") {
          return (
            <blockquote
              key={key}
              className="my-8 border-l-4 border-[#b99a60] bg-white px-6 py-5 font-serif text-xl italic leading-8 text-[#33485f]"
            >
              {node.text}
            </blockquote>
          );
        }
        return <p key={key}>{richText(node.text)}</p>;
      })}
    </div>
  );
}
