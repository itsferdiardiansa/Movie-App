# Movie Fest

Movie Fest is an application platform for managing and showcasing movies. This project consists of multiple modules including a custom UI component library, an admin CMS, all built using Vue 3, Vuex, NX, and integrated with CI/CD pipelines using Github Actions.

### Key Technologies

- **Vue 3**: A modern JavaScript framework for building the user interface.
- **Vuex**: State management for Vue applications.
- **NX**: A powerful build system and monorepo management tool.
- **TailwindCSS**: A utility-first CSS framework for building custom user interfaces.
- **Github Actions**: For continuous integration and deployment (CI/CD).

## Features

- **Admin CMS**: Built with Vue 3 and Vuex, this admin panel allows managing movie entries, filtering by views and genres, and adding/editing movie information.
- **UI Components**: Custom reusable components for forms, tables, and more, shared across the project.
- **Firebase Integration**: Real-time data fetching and updating for movies.
- **CI/CD with Github Actions**: Automatic deployment and testing pipelines.

## Project Structure

```bash
├── apps
│   └── aweb     # Admin CMS built with Vue 3 and Vuex
├── packages
│   └── ui         # Custom UI component library
├── nx.json        # NX configuration file
├── workspace.json # Workspace configuration
└── .ci
    └── ci         # Github Actions configuration for CI/CD
```

## Installation

```bash
pnpm install
```

**©** by Ferdi Ardiansa
