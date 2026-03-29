# 🌳 Proj-Tree CLI (Local Script)

A simple Node.js script to generate a clean **project folder structure** directly from your project root — with support for **ignore rules**, **file inclusion**, and **Markdown export**.

---

## 🚀 Why This Exists

The default `tree` command:

* ❌ Limited on Windows (no ignore support)
* ❌ Not flexible for dev workflows
* ❌ Doesn’t export clean Markdown easily

This tool solves that by providing:

* ✅ Folder-only tree (default)
* ✅ Optional file inclusion
* ✅ Custom ignore support
* ✅ Markdown output (`structure.md`)
* ✅ Works locally (no global install needed)

---

## 📦 Setup

Just create a file in your project root:

```bash
proj-tree.js
```

Paste the script inside it.

---

## ▶️ Usage

Run from your project root:

```bash
node proj-tree.js
```

---

## ⚙️ Features

### 1️⃣ Show Only Folders (Default)

```bash
node proj-tree.js
```

---

### 2️⃣ Include Files

```bash
node proj-tree.js --files
```

---

### 3️⃣ Ignore Specific Folders

```bash
node proj-tree.js --ignore=node_modules,.git,.next
```

---

### 4️⃣ Combine Options

```bash
node proj-tree.js --files --ignore=node_modules,.git,.next
```

---

## 📄 Output

### Terminal Output

```
my-project
├── src
│   ├── components
│   └── utils
└── public
```

---

### Markdown File Generated

A `structure.md` file is created automatically:

````md
```
my-project
├── src
│   ├── components
│   └── utils
└── public
```
````

Perfect for README documentation.

---

## ⚠️ Module Type Note

If your project uses `"type": "module"` (like Next.js or Vite), you may see this error:

```
ReferenceError: require is not defined in ES module scope
```

### ✅ Fix

Rename the file to:

```bash
proj-tree.cjs
```

Then run:

```bash
node proj-tree.cjs
```

### 💡 Why?

* `.js` → treated as ES Module (no `require`)
* `.cjs` → treated as CommonJS (supports `require`)

---

## 🧠 How It Works

* Uses Node.js `fs` module to read directories
* Recursively traverses folders (like `cd + ls`)
* Filters based on ignore rules
* Formats output into a tree structure

---

## 📁 Project Structure

```
proj-tree.js
README.md
```

---

## ⚠️ Important

If you're using this as a local utility script, it's recommended to **ignore it in Git**:

Add this to your `.gitignore`:

```
proj-tree.js
```

(or `proj-tree.cjs` if you renamed it)

This prevents unnecessary commits of a utility file specific to your local workflow.

---

## 🔥 Future Improvements

* [ ] Depth control (`--depth`)
* [ ] Auto-read `.gitignore`
* [ ] JSON output
* [ ] Colored CLI output
* [ ] Convert to global npm package
* [ ] VS Code extension

---

## 💡 Inspiration

Built to overcome limitations of the default `tree` command and improve developer workflow when documenting project structures.

---

## 🛠️ Tech Used

* Node.js
* File System (`fs`)
* Path module

---

## 👨‍💻 Author

Built as a developer utility tool for better project visualization.

---
