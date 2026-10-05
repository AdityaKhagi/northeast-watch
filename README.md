# Northeast Watch

> A digital current-affairs platform covering security, development, society, youth and achievements across Northeast India.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Northeast%20Watch-0f5132?style=for-the-badge)](https://northeast-watch.vercel.app)
[![Built with React](https://img.shields.io/badge/React-Frontend-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

**Northeast Watch** is a React + Vite digital companion developed alongside the e-magazine:

**“Securing the Northeast: Indian Army’s Role in Stability, Peace & National Security”**

The platform organizes curated current-affairs stories across the eight states of Northeast India and provides transparent source, verification and article-selection information for readers.

## 🌐 Live Demo

**Website:** https://northeast-watch.vercel.app

The application is deployed on Vercel and connected to the GitHub repository for streamlined deployment.

---

## 🎯 Project Overview

Northeast Watch was designed as a lightweight digital companion to a 50-page e-magazine focused on the Northeast region.

The platform provides:

- 📰 Curated current-affairs articles
- 🔎 Article search
- 🗂️ Category-based filtering
- 🗺️ Regional and state-based organization
- ✅ Article verification status
- 🔗 Direct source references
- 📚 Supporting sources
- 💡 Article-selection rationale
- 📱 Responsive interface
- 📖 Article verification modal
- 🧭 A structured editorial experience for research and discovery

The application is intentionally frontend-focused, keeping the architecture lightweight, maintainable and easy to deploy.

---

## 🌏 Regional Coverage

The project is designed around all eight states of Northeast India:

| State | Coverage |
|---|:---:|
| Assam | ✓ |
| Arunachal Pradesh | ✓ |
| Manipur | ✓ |
| Meghalaya | ✓ |
| Mizoram | ✓ |
| Nagaland | ✓ |
| Tripura | ✓ |
| Sikkim | ✓ |

### Editorial Categories

The content is organized into five major categories:

1. **Security & Strategic Affairs**
2. **Regional News**
3. **Development**
4. **Society & Youth**
5. **Sports & Achievements**

This structure supports the broader editorial narrative:

**Security → Peace → Stability → Development → Society → Youth → National Integration**

---

## ✨ Key Features

### 🔎 Search & Filtering

Users can search the article collection and filter stories by editorial category.

### 📰 Article Discovery

Each article uses structured content containing:

- Headline
- Publication date
- Category
- Region
- Summary
- Tags
- Source
- Verification status

### ✅ Verification Information

The platform presents verification information and explains why an article was selected for inclusion.

### 🔗 Source Transparency

Articles provide direct source references so readers can independently inspect the underlying reporting.

### 📚 Supporting Sources

Where applicable, additional supporting references can be associated with an article.

### 📱 Responsive Design

The interface is designed for desktop, tablet and mobile screen sizes.

### 🎨 Editorial UI

The visual system combines a clean modern interface with a restrained current-affairs and defence-publication aesthetic.

### ⚡ Lightweight Architecture

The application does not require a backend, database or authentication layer. Content is maintained through structured frontend data.

---

## 🛡️ Editorial & Verification Methodology

Northeast Watch follows a structured approach when selecting articles.

Before an article is included, the following factors are considered:

1. **Publication date**
2. **Original source**
3. **Relevance to the assigned theme**
4. **Factual consistency**
5. **Direct source URL**
6. **Reason for selecting the article**

Source transparency is an important part of the platform's design.

The website is intended to complement the 50-page e-magazine rather than replace it.

The e-magazine remains the primary editorial submission, while Northeast Watch acts as a digital research, source-verification and article-discovery companion.

---

## 🏗️ Technology Stack

### Frontend

- React
- Vite
- JavaScript
- HTML5
- CSS3

### Development Tools

- Node.js
- npm
- Git
- GitHub
- VS Code

### Deployment

- Vercel

The application is a static frontend and does not currently require backend infrastructure.

---

## 📁 Project Structure

```text
northeast-watch/
│
├── public/
│
├── src/
│   ├── main.jsx
│   └── styles.css
│
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/AdityaKhagi/northeast-watch.git
cd northeast-watch
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local Vite URL displayed in the terminal.

---

## 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production output is generated in the `dist/` directory.

---

## 📝 Article Data Structure

Articles are maintained as structured frontend data.

A typical article follows this structure:

```javascript
{
  id: 1,
  title: "Your verified headline",
  date: "2026-09-15",
  category: "Security & Strategic Affairs",
  region: "Arunachal Pradesh",
  source: "Example Source",
  sourceUrl: "https://example.com/article",
  verification: "Verified",
  summary: "Factual summary of the article.",
  selectedBecause: "Reason for selecting the article.",
  tags: ["Security", "Border"],
  supportingSources: [
    "https://example.com/supporting-source"
  ]
}
```

This structure keeps the application simple while making the content easy to maintain.

---

## 🎨 Design Principles

The interface was designed around:

- Clear information hierarchy
- Source transparency
- Minimal navigation complexity
- Responsive layouts
- Readable typography
- Editorial visual language
- Lightweight frontend architecture
- Easy maintenance
- Fast static deployment

---

## 🔐 Data & Privacy

Northeast Watch does not currently use:

- User accounts
- Authentication
- Personal user profiles
- A backend database
- Server-side user tracking

The project is primarily a static frontend application.

---

## 🔮 Future Scope

Potential future improvements include:

- Headless CMS integration
- Advanced search
- State-specific dashboards
- Interactive Northeast maps
- Article bookmarking
- Automated source validation
- Editorial analytics
- Progressive Web App support

These features are outside the scope of the current lightweight implementation.

---

## 📌 Project Context

Northeast Watch was developed as a digital companion to the e-magazine:

**Securing the Northeast: Indian Army’s Role in Stability, Peace & National Security**

The broader project explores the relationship between:

**Security → Peace → Stability → Development → Society → Youth → National Integration**

The website provides a structured digital layer for exploring the current-affairs research supporting that editorial narrative.

---

## 👨‍💻 Author

**Aditya Khagi**

B.Tech Computer Science & Engineering

### Areas of Interest

- Full-Stack Development
- Data Science
- Artificial Intelligence
- Software Engineering
- Real-world technology projects

### Links

- **GitHub:** https://github.com/AdityaKhagi
- **Portfolio:** https://aditya-portfolio-ten-sigma.vercel.app/
- **Live Project:** https://northeast-watch.vercel.app

---

## 📄 License

This project is intended for educational, research and portfolio purposes.

Individual article content, photographs and external source material remain the property of their respective publishers, organizations and copyright holders.

---

## ⭐ Project

If you find the project useful or interesting, consider giving the repository a star on GitHub.

**Repository:** https://github.com/AdityaKhagi/northeast-watch

**Live Demo:** https://northeast-watch.vercel.app
