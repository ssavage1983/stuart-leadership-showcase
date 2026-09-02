import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

// Pure TS Cookie Helpers
export function setConsentCookie(value: "all" | "essential") {
  const date = new Date();
  // 12 months expiration
  date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
  const expires = "; expires=" + date.toUTCString();
  document.cookie = `consent_status=${value}${expires}; path=/; SameSite=Lax; Secure`;
}

export function getConsentCookie(): string | null {
  if (typeof document === "undefined") return null;
  const nameEQ = "consent_status=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function clearConsentCookie() {
  document.cookie = "consent_status=; Max-Age=-99999999; path=/; SameSite=Lax; Secure";
}

interface CookieConsentBannerProps {
  onAcceptAll: () => void;
  onAcceptEssential: () => void;
}

export default function CookieConsentBanner({
  onAcceptAll,
  onAcceptEssential,
}: CookieConsentBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = getConsentCookie();
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed bottom-0 left-0 right-0 z-[100] bg-[#1a1a1a] text-white border-t border-[#c9ad72]/30 px-6 py-5 md:py-4 shadow-[0_-8px_30px_rgb(0,0,0,0.5)] transition-transform duration-300"
    >
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Text Content */}
        <div className="space-y-1.5 max-w-3xl">
          <h2
            id="cookie-banner-title"
            className="font-serif text-lg font-semibold tracking-wide text-[#c9ad72]"
          >
            We use cookies
          </h2>
          <p id="cookie-banner-desc" className="text-xs text-white/85 leading-relaxed font-sans">
            This site uses essential cookies to function. We would also like to use optional
            analytics cookies to understand how visitors use the site. You can accept all cookies
            or choose only essential ones.{" "}
            <Link
              to="/cookie-policy"
              className="text-[#c9ad72] hover:text-[#e5c98f] underline underline-offset-2 transition-colors inline-block focus:outline-none focus:ring-1 focus:ring-[#c9ad72]"
            >
              Cookie Policy
            </Link>
          </p>
        </div>

        {/* Buttons / Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={() => {
              setConsentCookie("essential");
              setIsVisible(false);
              onAcceptEssential();
            }}
            className="px-5 py-2.5 sm:py-2 text-xs font-bold uppercase tracking-wider text-white border border-white/60 hover:border-white hover:bg-white/10 rounded transition-all cursor-pointer text-center focus:outline-none focus:ring-2 focus:ring-[#c9ad72]"
          >
            Essential Only
          </button>
          <button
            onClick={() => {
              setConsentCookie("all");
              setIsVisible(false);
              onAcceptAll();
            }}
            className="px-5 py-2.5 sm:py-2 text-xs font-bold uppercase tracking-wider bg-[#c9ad72] text-[#102845] hover:bg-[#e5c98f] hover:text-[#0b1b30] rounded shadow transition-all cursor-pointer text-center focus:outline-none focus:ring-2 focus:ring-[#c9ad72]"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
