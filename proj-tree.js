// node proj-tree.js
// node proj-tree.js --ignore=node_modules,.git,.next
// node proj-tree.js --files
// node proj-tree.js --files --ignore=node_modules,.git,.next

const fs = require("fs");
const path = require("path");

// Default ignore list
let IGNORE = [".git", "node_modules", ".venv"];
let INCLUDE_FILES = false;

// Read CLI args
const args = process.argv.slice(2);

// Parse ignore flag
const ignoreArg = args.find((arg) => arg.startsWith("--ignore="));
if (ignoreArg) {
  IGNORE = ignoreArg.split("=")[1].split(",");
}

// Parse files flag
if (args.includes("--files")) {
  INCLUDE_FILES = true;
}

function buildTree(dir, prefix = "") {
  let output = "";

  let items = fs.readdirSync(dir);

  // Ignore unwanted
  items = items.filter((item) => !IGNORE.includes(item));

  // Sort: folders first, then files
  items.sort((a, b) => {
    const aIsDir = fs.statSync(path.join(dir, a)).isDirectory();
    const bIsDir = fs.statSync(path.join(dir, b)).isDirectory();
    return bIsDir - aIsDir;
  });

  items.forEach((item, index) => {
    const fullPath = path.join(dir, item);
    const isDir = fs.statSync(fullPath).isDirectory();
    const isLast = index === items.length - 1;

    // Skip files if not included
    if (!isDir && !INCLUDE_FILES) return;

    output += `${prefix}${isLast ? "└── " : "├── "}${item}\n`;

    if (isDir) {
      output += buildTree(fullPath, prefix + (isLast ? "    " : "│   "));
    }
  });

  return output;
}

// Root
const root = process.cwd();
const rootName = path.basename(root);

const tree = buildTree(root);

// Print
console.log(rootName);
console.log(tree);

// Save Markdown
fs.writeFileSync("structure.md", "```\n" + rootName + "\n" + tree + "\n```");

console.log("✅ structure.md created");
