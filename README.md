# Suvam — Frontend Projects Dashboard

A creative, scalable dashboard to showcase your mini frontend projects.

## Features

- **Branded logo** — “Suvam” with gradient animation
- **Navbar** — Home & Projects links
- **Social icons** — Instagram, Twitter/X, GitHub (default links — update them!)
- **Typewriter effect** — cycling titles on the hero
- **Scalable project list** — just edit the array in `js/script.js`
- **Individual project pages** with “Back to Dashboard” links
- **Modern dark UI** with glass cards, orbs, and smooth hover effects
- **Responsive** layout

## Project Structure

```
suvam-dashboard/
├── index.html              ← Main dashboard
├── css/style.css
├── js/script.js            ← Typewriter + project data (add new projects here)
├── projects/
│   ├── profile-card/index.html
│   ├── tribute-page/index.html
│   ├── food-website/index.html
│   └── shop-shop/index.html
└── README.md
```

## How to add a new project

1. Create a folder: `projects/your-project-name/`
2. Add `index.html` inside it
3. Open `js/script.js` and append an object to the `projects` array:

```js
{
  id: 5,
  title: "Your Project",
  description: "Short description here.",
  path: "projects/your-project-name/index.html",
  tags: ["HTML", "CSS"]
}
```

That’s it — the card appears automatically.

## Run locally

Open `index.html` in a browser, or use a simple server:

```bash
npx serve .
# or
python -m http.server 3000
```

## Customize social links

In `index.html` (and footer), replace:

- `https://instagram.com`
- `https://twitter.com`
- `https://github.com`

with your real profiles.

---

Built with curiosity & code.
