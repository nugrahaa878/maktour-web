# Maktour Customer Website

A modern web application for Maktour customers built with React, TypeScript, and Vite.

## Tech Stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [ESLint](https://eslint.org/) - For finding and fixing code problems
- [Prettier](https://prettier.io/) - Code formatter

## Project Structure

The project follows the Atomic Design methodology for component organization:

```
src/
├── components/
│   ├── atoms/      # Basic building blocks (buttons, inputs, etc.)
│   ├── molecules/  # Groups of atoms (form fields, etc.)
│   └── organisms/  # Complex components (headers, forms, etc.)
├── app/
│   └── app.tsx     # Main application component
└── main.tsx        # Application entry point
```

## Prerequisites

- Node.js (v14 or higher)
- Yarn package manager

## Getting Started

1. Clone the repository

```bash
git clone [repository-url]
cd maktour-web
```

2. Install dependencies

```bash
yarn install
```

3. Start the development server

```bash
yarn dev
```

4. Build for production

```bash
yarn build
```

## Development

### Code Style

The project uses ESLint and Prettier for code formatting and maintaining code quality. Configuration files are included in the project root:

- `eslint.config.js` - ESLint configuration
- `prettier.config.js` - Prettier configuration

### Atomic Design

The project implements the Atomic Design methodology for component organization:

- **Atoms**: Basic building blocks of matter, such as buttons, inputs, and text elements
- **Molecules**: Groups of atoms bonded together, like a form label, search input, and button
- **Organisms**: Complex UI components composed of groups of molecules and/or atoms

## Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.