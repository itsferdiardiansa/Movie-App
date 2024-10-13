# @pomy/ui

## Project Overview

`@pomy/ui` is a highly flexible and scalable UI component library built using **Vue 3** and **TypeScript**. It is designed to deliver a modern, responsive, and modular interface for web applications. The project integrates advanced technologies such as **Vite**, **Vitest**, **Storybook**, and **TailwindCSS** to provide a robust development and testing environment.

This library is optimized for component-driven development and focuses on reusability, making it perfect for teams looking to create consistent UI elements.

### Purpose

The purpose of `@pomy/ui` is to provide developers with a reusable component library that is easy to integrate and extend. This project is intended to be shared within teams or across multiple projects, making it ideal for companies looking to maintain consistent UI design across their products.

---

### Tech Stack

- **Vue 3**: A progressive JavaScript framework for building user interfaces.
- **TypeScript**: Type-safe JavaScript that ensures robustness and reduces errors.
- **Vite**: A fast build tool and development server for modern web projects.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **Storybook**: Develop and test components in isolation.
- **Vitest**: A blazing fast unit testing framework built for Vite.
- **ESLint & Prettier**: Enforcing code style and best practices.

---

### Key Features

- **Component-driven architecture**: Create components in isolation for maximum reusability.
- **TypeScript support**: Full TypeScript support with strict typings to ensure type safety.
- **Responsive design**: Built-in responsive UI with TailwindCSS, ensuring it works across devices.
- **Testing and documentation**: Components are thoroughly tested with Vitest and documented in Storybook.
- **Modular structure**: Components are easily composable and extendable.

---

### Installation

To install `@pomy/ui` into your project, you can use the following commands:

Using pnpm:  
`pnpm add @pomy/ui`

### Development

To start the development environment and work on the components, run the following command:  
`pnpm run dev`

This will start **Storybook** on port `9003`, allowing you to develop and preview components in isolation.

To build the library for production, use the following command:  
`pnpm run build`

To run the unit tests for the components, use:  
`pnpm run test`

For continuous testing, use:  
`pnpm run test:watch`

To lint your project and ensure code consistency, run:  
`pnpm run lint`

To automatically fix linting issues, use:  
`pnpm run lint:fix`

### Folder Structure

- **src/components**: Contains the reusable UI components.
- **src/utils**: Utility functions and helpers.
- **storybook**: Configuration and documentation files for Storybook.
- **tests**: Unit tests for the components.

---

**©** by Ferdi Ardiansa
