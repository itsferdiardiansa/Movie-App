# Movie Fest Web

## Overview

Movie Fest is a platform for managing and showcasing movies. The project is structured into multiple modules to handle different features such as movie management, views tracking, and user interaction with movies. This repository contains the source code for both frontend and backend services.

## Features

- Movie catalog with detailed information.
- Admin panel for creating, updating, and managing movies.
- Filtering options such as most viewed movies and genres.
- Integration with Firebase for (real-time) data management.
- Responsive design built with Vue.js and TailwindCSS.

## Project Structure

```bash
apps/web/main-web
├── public          # Public assets like index.html
├── src
│   ├── components  # Vue components for UI
│   ├── features    # Different features like movie management
│   ├── router      # Vue Router setup
│   ├── store       # Vuex store for state management
│   └── services    # Firebase integration and other external services
└── tests           # Unit and integration tests
```

## Prerequisites

- Node.js v16+
- Vue CLI
- Firebase project for backend services

## Features

- Display list of movies.
- Detailed movie view with descriptions, genres, and watch links.
- Admin dashboard for managing movies.
- Filter movies by views and genres.
- Firebase integration for real-time data management.

## Installation

```bash
pnpm install
```

## Development

You need to install and build `@pomy/ui` in the `packages/ui` directory to be able to run this project.

```bash
pnpm run dev
```

**©** by Ferdi Ardiansa
