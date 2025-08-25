# Jesus Celebration Centre (JCC) Mombasa - Official Website

> A modern, responsive church website built with React, TypeScript, and Tailwind CSS

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC)](https://tailwindcss.com/)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 About

The official website for Jesus Celebration Centre Mombasa - an international Pentecostal ministry with presence in Kenya, UK, and USA. This modern web application serves our mission: *"To fulfill its mandate of harvesting as many souls to Christ and be the light house of Africa and many other continents."*

### 🌟 Our Mission
To provide a comprehensive digital platform that:
- Connects our global congregation
- Facilitates online worship and services
- Supports community outreach and evangelism
- Provides educational resources and programs
- Enables secure online giving and donations

## ✨ Features

### 🏠 Core Features
- **Responsive Design**: Mobile-first layout optimized for all devices
- **Live Streaming**: Integrated live service broadcasts
- **Event Management**: Interactive calendar with registration capabilities
- **Online Giving**: Secure donation system with multiple payment methods
- **Ministry Pages**: Dedicated sections for all church ministries
- **Leadership Profiles**: Meet our pastoral team and church leaders
- **Education Complex**: Information about our K-12 school programs
- **Photo Gallery**: Media galleries showcasing church activities
- **Contact Forms**: Prayer requests and general inquiries
- **Global Presence**: Multi-location service information

### 🛡️ Admin Features
- Member authentication system
- Content management capabilities
- Role-based access control
- Analytics and reporting (planned)

### 📱 User Experience
- Fast loading times with Vite optimization
- Smooth navigation with React Router
- Accessible design following WCAG guidelines
- SEO optimized for search engines
- Progressive Web App capabilities (planned)

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 4.4.5
- **Styling**: Tailwind CSS 3.3.3
- **Routing**: React Router 6.15.0
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

### Backend & Services (Planned)
- **Database**: Supabase PostgreSQL
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Payments**: Stripe Integration
- **Email**: EmailJS or similar service

### Development Tools
- **Package Manager**: npm (Node.js 18+)
- **Linting**: ESLint with TypeScript rules
- **Code Formatting**: Prettier (recommended)
- **Version Control**: Git

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher)
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DavidLai82/JCC.git
   cd JCC
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   # Add other environment variables as needed
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 📁 Project Structure

```
jcc-mombasa/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Layout/        # Layout components (Header, Footer, Layout)
│   │   └── ErrorBoundary.tsx
│   ├── context/           # React Context providers
│   │   └── AuthContext.tsx
│   ├── data/              # Mock data and constants
│   │   └── mockData.ts
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Leadership.tsx
│   │   ├── Ministries.tsx
│   │   ├── Education.tsx
│   │   ├── Events.tsx
│   │   ├── Gallery.tsx
│   │   ├── Live.tsx
│   │   ├── Give.tsx
│   │   └── Contact.tsx
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles and Tailwind CSS
├── .env.example           # Environment variable template
├── .gitignore            # Git ignore rules
├── components.json        # UI component configuration
├── eslint.config.js       # ESLint configuration
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── tsconfig.node.json    # Node.js TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md            # Project documentation
```

## 💻 Development

### Available Scripts

```bash
# Start development server (default port: 5173)
npm run dev

# Build for production
npm run build

# Build for production (specific mode)
npm run build:prod

# Preview production build
npm run preview

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

### Development Guidelines

1. **Code Style**: Follow the ESLint configuration and TypeScript best practices
2. **Component Structure**: Use functional components with hooks
3. **Styling**: Utilize Tailwind CSS utility classes
4. **Type Safety**: Maintain strict TypeScript types
5. **Accessibility**: Ensure components are accessible (WCAG compliant)

### Adding New Features

1. Create feature branch: `git checkout -b feature/feature-name`
2. Implement changes with proper TypeScript typing
3. Test thoroughly across different screen sizes
4. Update documentation if needed
5. Submit pull request with clear description

## 🚀 Deployment

### Build Process

1. **Production Build**
   ```bash
   npm run build
   ```

2. **Preview Build Locally**
   ```bash
   npm run preview
   ```

### Deployment Platforms

#### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

#### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Set environment variables in Netlify dashboard

#### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` directory to `gh-pages` branch

#### Traditional Hosting
1. Build the project: `npm run build`
2. Upload the `dist` directory contents to your web server

### Environment Variables for Production

Ensure these variables are set in your production environment:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_STRIPE_PUBLISHABLE_KEY`
- `VITE_GOOGLE_ANALYTICS_ID` (if using analytics)

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started
1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/JCC.git`
3. Create a feature branch: `git checkout -b feature/amazing-feature`
4. Make your changes
5. Commit with descriptive messages: `git commit -m 'Add amazing feature'`
6. Push to your branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style and conventions
- Write clear, concise commit messages
- Include tests for new features when applicable
- Update documentation for significant changes
- Respect the project's Christian values and mission

### Code of Conduct
- Be respectful and inclusive in all interactions
- Focus on what is best for the community
- Show empathy towards other community members
- Use welcoming and inclusive language

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

### JCC Mombasa
- **Website**: [https://jccmombasa.org](https://jccmombasa.org)
- **Email**: info@jccmombasa.org
- **Phone**: +254 700 000 000
- **Address**: Mombasa Road, Mombasa, Kenya

### Development Team
- **Project Repository**: [https://github.com/DavidLai82/JCC](https://github.com/DavidLai82/JCC)
- **Issues**: [GitHub Issues](https://github.com/DavidLai82/JCC/issues)
- **Discussions**: [GitHub Discussions](https://github.com/DavidLai82/JCC/discussions)

### Social Media
- **Facebook**: [@jccmombasa](https://facebook.com/jccmombasa)
- **Instagram**: [@jccmombasa](https://instagram.com/jccmombasa)
- **YouTube**: [JCC Mombasa](https://youtube.com/jccmombasa)
- **Twitter**: [@jccmombasa](https://twitter.com/jccmombasa)

---

## 🙏 Acknowledgments

- The JCC Mombasa pastoral team and congregation for their vision and support
- The development community for excellent tools and resources
- Contributors who have helped improve this project

**Built with ❤️ for the Kingdom of God**

---

*"To fulfill its mandate of harvesting as many souls to Christ and be the light house of Africa and many other continents."* - JCC Mombasa Mission Statement