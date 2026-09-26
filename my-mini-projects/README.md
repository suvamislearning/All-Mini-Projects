# My All Mini Projects

## Folder structure

```
my-mini-projects/
├── index.html              ← the dashboard (home page)
├── css/
│   └── style.css           ← dashboard-only styles
└── projects/
    ├── profile-card/
    │   ├── index.html
    │   └── style.css
    ├── shoe-shop/
    │   ├── index.html
    │   └── style.css
    ├── tribute-card/
    │   ├── index.html
    │   └── style.css
    ├── credit-card/
    │   ├── index.html
    │   └── style.css
    └── todo-list/
        ├── index.html
        ├── style.css
        └── script.js
```

Each project is fully self-contained in its own folder with its own `index.html`
and `style.css`, so you can edit one project without touching any other.
Every project links back to the dashboard with a "← Back to dashboard" link.

## How to add a new project

1. **Make a new folder** inside `projects/` — name it after the project,
   using lowercase words and hyphens (e.g. `projects/weather-app/`).

2. **Add two files inside it**: `index.html` and `style.css`. The easiest way
   is to copy an existing project folder (like `profile-card/`) and rename it,
   then clear out the content and start fresh. Keep the `<link rel="stylesheet" href="style.css">`
   line in the HTML — since the CSS file lives in the same folder, you don't
   need any folder path in front of it.

3. **Add the back link** at the top of the new `index.html` so you can return
   to the dashboard:
   ```html
   <a class="back-link" href="../../index.html">← Back to dashboard</a>
   ```

4. **Add a tile for it on the dashboard.** Open `index.html` (the one in the
   root folder, not inside `projects/`) and add a new tile inside `<main class="board">`:
   ```html
   <a class="tile" href="projects/weather-app/index.html">
     <span class="tile-index">06</span>
     <span class="tile-body">
       <span class="tile-name">Weather App</span>
       <span class="tile-desc">A short one-line description of the project.</span>
     </span>
   </a>
   ```
   That's it — no changes to `css/style.css` are needed, since the `.tile` style
   already applies to any link with that class.

5. **Open `index.html` in your browser** to check the new tile appears and the
   link opens your new project.



- Folder name: lowercase, hyphen-separated, matches the project (`landing-page`, `quiz-app`).
- Inside every project folder: always `index.html` + `style.css` (+ `script.js` if needed).
- Tile index numbers on the dashboard are just labels — feel free to renumber
  or drop them if you'd rather not track order.
