# Personal Website — Angular App
### Practical Work No. 12 — 2025/2026

## 📁 Project Structure

```
personal-website/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/        # Fixed navigation bar
│   │   │   ├── hero/          # Landing / hero section
│   │   │   ├── about/         # About me section
│   │   │   ├── skills/        # Skills with progress bars
│   │   │   ├── projects/      # Project cards
│   │   │   ├── contact/       # Contact form (static)
│   │   │   └── footer/        # Footer
│   │   ├── models/
│   │   │   └── models.ts      # TypeScript interfaces
│   │   ├── app.component.ts   # Root component
│   │   ├── app.config.ts      # App configuration
│   │   └── app.routes.ts      # Router config
│   ├── index.html
│   ├── main.ts
│   └── styles.css             # Global styles & CSS variables
├── angular.json
├── package.json
└── tsconfig.json
```

## 🚀 Running the Project

### Prerequisites
- Node.js (v18 or higher)
- npm

### Install & Run
```bash
npm install
npm start
```

Then open http://localhost:4200 in your browser.

## 🧩 Components

| Component | Description |
|-----------|-------------|
| `NavbarComponent` | Fixed top navbar with scroll detection and mobile menu |
| `HeroComponent` | Full-screen landing with animated avatar and stats |
| `AboutComponent` | Bio, personal details in a card layout |
| `SkillsComponent` | Skills with progress bars, filterable by category |
| `ProjectsComponent` | Project grid with tags |
| `ContactComponent` | Contact info + static form (no events per assignment) |
| `FooterComponent` | Links and copyright |

## 📝 Notes

- All data is **static** in component templates/classes (no backend)
- The contact form **does not manage events** (per assignment requirements)
- Uses **standalone components** (Angular 17 modern syntax)
- Uses `@for` and `@if` **new control flow syntax**
- Fully **responsive** (mobile-first)
