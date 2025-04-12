# React Frontend Template

A production-grade React application template with modern tooling and best practices. Clone and use this template to jumpstart your projects without the hassle of setting up the boilerplate every time.

## Features

- ⚡️ **Vite** - Lightning fast build tool with instant HMR
- 🔄 **React 18** - Latest React with improved rendering and concurrent features
- 🧰 **TypeScript** - Type safety for robust application development
- 🔄 **Redux Toolkit** - State management with simplified Redux setup
- 🛣️ **React Router** - Declarative routing for React applications
- 💅 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 📏 **ESLint & Prettier** - Code quality and formatting consistency
- 🧪 **Ready for testing** - Set up for component and integration tests
- 📁 **Scalable architecture** - Feature-based file structure for large applications

## Project Structure

```bash

src/
├── assets/ # Static assets like images, fonts
├── components/ # Reusable UI components
├── features/ # Feature-based modules with related logic
│ └── counter/ # Example feature with components and state
├── hooks/ # Custom React hooks
├── layouts/ # Layout components
├── pages/ # Page components for routing
├── routes/ # Routing configuration
├── store/ # Redux store setup and root reducer
├── styles/ # Global styles and CSS utilities
└── types/ # TypeScript type definitions

```

## Getting Started

### Prerequisites

- Node.js (v18)
- npm or yarn

### Installation

1. Fork & Clone the repository:

```bash
git https://github.com/why-it-works/frontend-template.git
cd frontend-template
```

2. Install dependencies:

```bash
nvm install v18.20.4
nvm use v18.20.4
npm install
# or
yarn
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality checking
- `npm run preview` - Preview the production build locally

## Technology Stack

- **React** - UI library
- **TypeScript** - Type checking
- **Redux Toolkit** - State management
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **ESLint/Prettier** - Code quality and formatting
- **Axios** - HTTP client

## Why This Template?

This template follows industry best practices and provides:

- **Scalable Architecture**: Feature-based organization that scales with your application
- **Type Safety**: Full TypeScript integration for better developer experience
- **Performance Optimized**: Built with Vite for fast development and optimized production builds
- **State Management**: Redux Toolkit configured with best practices
- **Consistent Styling**: Tailwind CSS with custom utility classes
- **Path Aliases**: Configured with `@/` aliases for cleaner imports

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
