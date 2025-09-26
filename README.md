# 🎓 Hexon - Modern Course Selling Platform

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)

> **Hexon** is a cutting-edge, modern course selling platform built with Next.js 14, designed to provide an exceptional learning experience for both instructors and students.

## ✨ Features

### 🎯 Core Features
- **Modern UI/UX**: Beautiful, responsive design with dark theme
- **Course Management**: Create, edit, and manage courses with ease
- **User Authentication**: Secure login and registration system
- **Payment Integration**: Seamless payment processing for course purchases
- **Progress Tracking**: Track student progress and completion rates
- **Interactive Learning**: Engaging course content with multimedia support

### 🛠️ Technical Features
- **Server-Side Rendering**: Fast page loads with Next.js 14
- **TypeScript**: Type-safe development for better code quality
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Reusable UI components with Radix UI
- **Database Integration**: Efficient data management with LibSQL
- **Real-time Updates**: Dynamic content updates
- **SEO Optimized**: Built-in SEO optimization for better discoverability

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn or bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Joohhnnyyy/Hexon.git
   cd Hexon
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables in `.env.local`

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
hexon/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── eventi/            # Events page
│   │   ├── progetti/          # Projects page
│   │   ├── ricerca/           # Research page
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── sections/          # Page sections
│   │   └── ui/                # UI components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   └── visual-edits/          # Visual editing components
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Heroicons, Tabler Icons, Lucide React
- **Animations**: Framer Motion, React Three Fiber

### Backend & Database
- **Database**: LibSQL
- **ORM**: Drizzle ORM
- **Authentication**: NextAuth.js (planned)

### Development Tools
- **Package Manager**: npm/yarn/bun
- **Linting**: ESLint
- **Code Formatting**: Prettier (recommended)
- **Build Tool**: Turbopack (Next.js 14)

## 📚 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:generate  # Generate database migrations
npm run db:migrate   # Run database migrations
npm run db:studio    # Open database studio
```

## 🎨 Design System

Hexon uses a carefully crafted design system with:

- **Color Palette**: Modern dark theme with accent colors
- **Typography**: Clean, readable fonts optimized for learning
- **Components**: Consistent, accessible UI components
- **Responsive Design**: Mobile-first approach
- **Animations**: Smooth, purposeful animations

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="your_database_url"

# Authentication (if using NextAuth.js)
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"

# Payment (if using Stripe)
STRIPE_PUBLIC_KEY="your_stripe_public_key"
STRIPE_SECRET_KEY="your_stripe_secret_key"

# Email (if using email services)
EMAIL_SERVER_HOST="your_email_host"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your_email_user"
EMAIL_SERVER_PASSWORD="your_email_password"
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Other Platforms

Hexon can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/) and [Lucide](https://lucide.dev/)

## 📞 Support

- **Documentation**: [Coming Soon]
- **Issues**: [GitHub Issues](https://github.com/Joohhnnyyy/Hexon/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Joohhnnyyy/Hexon/discussions)

---

<div align="center">
  <p>Made with ❤️ by the Hexon Team</p>
  <p>
    <a href="https://github.com/Joohhnnyyy/Hexon">⭐ Star us on GitHub</a> •
    <a href="https://github.com/Joohhnnyyy/Hexon/issues">🐛 Report Bug</a> •
    <a href="https://github.com/Joohhnnyyy/Hexon/issues">💡 Request Feature</a>
  </p>
</div>
