# 🌐 Bessa Sabrina — Developer Portfolio

My personal portfolio, showcasing my projects, skills and background as a **full-stack web developer** (React / Next.js · NestJS · Prisma · PostgreSQL · Docker).

## ✨ Features

- ⚛️ Built with React 19 + Vite
- 🎨 Styled with Tailwind CSS
- 🌙 Dark mode that follows the system setting and is remembered between visits
- 🌍 English / French, context-based and reactive (defaults to the browser language)
- 📱 Fully responsive, with project screenshot carousels
- 🎞️ Scroll animations with AOS
- 🔎 SEO and social-preview meta tags
- 🧹 Linted with ESLint

## 🧰 Tech Stack

- **Languages:** JavaScript (ES2022+), HTML, CSS
- **Framework:** React 19, Vite
- **Styling:** Tailwind CSS
- **State:** React Context + hooks
- **Icons:** react-icons
- **Deployment:** Vercel

## 🚀 Getting Started

```bash
git clone https://github.com/SaabImm/Multilingual-Portfolio.git
cd Multilingual-Portfolio
npm install
npm run dev
```

Then open http://localhost:5173.

| Script            | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start the dev server     |
| `npm run build`   | Production build         |
| `npm run preview` | Preview the build        |
| `npm run lint`    | Run ESLint               |

## 📁 Project Structure

```
src/
├── assets/          # Avatar images
├── Components/      # Navbar, project card, tech tags
├── Context/         # Dark mode + translation providers and hooks
├── Pages/           # Home, Projects, Skills, About, Contact sections
├── Translations/    # en.json / fr.json — all copy and project data
├── techs.js         # Tech icons/colors and skill categories
├── App.jsx
└── main.jsx
public/assets/       # Project screenshots
```

**Adding a project:** add an entry to `projectItems` in both `en.json` and `fr.json` (screenshots go in `public/assets/`, optional `liveLink` / `githubLink`).
**Adding a skill:** register it in `techs.js` and add its key to a category.

## 📬 Contact

- Email: sabrinabessa754@gmail.com
- Phone: +213 797 81 76 23
- LinkedIn: https://www.linkedin.com/in/saab-imm-4697a8320
- GitHub: https://github.com/SaabImm

---

🇫🇷 **Version française**

Portfolio de développeuse full-stack réalisé avec React et Tailwind CSS : mode sombre (suit le système et mémorisé), design responsive, prise en charge anglais/français, et une sélection de projets allant du front-end aux applications full-stack NestJS / Prisma / PostgreSQL.
