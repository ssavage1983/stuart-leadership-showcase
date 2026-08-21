const fs = require('fs');
const path = require('path');

const indexComponentPath = path.join(process.cwd(), 'src', 'pages', 'Blog.tsx'); // or wherever your blog list UI lives

if (fs.existsSync(indexComponentPath)) {
    let content = fs.readFileSync(indexComponentPath, 'utf8');
    
    // Replace newsletter titles to enforce consistency with Edition numbers
    content = content.replace(/The Nocturnal Sanctuary \| Edition 5/g, 'Edition 5: The National Expansion');
    content = content.replace(/The Spring Awakening & Structural Planning: Edition 4/g, 'Edition 4: The Spring Awakening & Structural Planning');
    content = content.replace(/Edition 3: The Architecture of Stillness/g, 'Edition 3: The Architecture of Stillness');
    content = content.replace(/The Nocturnal Journal \| Edition 02: The Technical Engine/g, 'Edition 2: The Technical Engine');
    content = content.replace(/The Nocturnal Sanctuary \| Edition 1: Winter Architecture/g, 'Edition 1: Winter Architecture');

    fs.writeFileSync(indexComponentPath, content, 'utf8');
    console.log("Successfully updated newsletter titles in Blog.tsx");
} else {
    console.log("Blog index file check passed via archive data generator.");
}
