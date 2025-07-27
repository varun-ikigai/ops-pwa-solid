# 361 Ops Centre - Progressive Web App

A modern Progressive Web App (PWA) built with SolidJS and SolidStart, designed for managing and monitoring banking operations. Features a responsive layout with a collapsible left sidebar, contextual ribbon menu, and offline-first capabilities.

## Features

- **Progressive Web App (PWA)**: Offline support, service worker caching, and "Add to Home Screen" functionality
- **Responsive Layout**: Collapsible left sidebar navigation with top navigation bar
- **Contextual Ribbon Menu**: Microsoft Office-style ribbon with contextual actions
- **Modern Tech Stack**: SolidJS, SolidStart, Tailwind CSS, and Bun
- **Docker Support**: Production-ready Docker containerization

## Tech Stack

- **Framework**: [SolidJS](https://solidjs.com/) with [SolidStart](https://start.solidjs.com/)
- **Package Manager**: [Bun](https://bun.sh/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **PWA**: [vite-plugin-pwa](https://vite-pwa-org.netlify.app/)
- **Containerization**: Docker with multi-stage builds

## Prerequisites

- [Bun](https://bun.sh/) (v1.0 or higher)
- [Docker](https://docker.com/) (for containerized deployment)

## Development

### Install Dependencies

```bash
bun install
```

### Start Development Server

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

The development server will be available at `http://localhost:3000`.

### Build for Production

```bash
bun run build
```

### Start Production Server

```bash
bun run start
```

## Docker Deployment

### Build Docker Image

```bash
docker build -t ops-centre .
```

### Run Container

```bash
# Run on port 3000
docker run -p 3000:3000 ops-centre

# Run on custom port
docker run -p 8080:3000 ops-centre
```

### Docker Compose (Optional)

Create a `docker-compose.yml` file for easier management:

```yaml
version: '3.8'
services:
  ops-centre:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

Then run:

```bash
docker-compose up -d
```

## PWA Features

This app is configured as a Progressive Web App with:

- **Service Worker**: Automatically caches static assets and provides offline support
- **Web App Manifest**: Enables "Add to Home Screen" functionality
- **Asset Caching**: Long-term caching of JS/CSS bundles for fast loading
- **Offline Support**: Core app functionality works without internet connection

### Testing PWA Features

1. Build and serve the app in production mode
2. Open Chrome DevTools → Application tab
3. Check Service Workers and Cache Storage
4. Test offline functionality by disabling network
5. Use Lighthouse to audit PWA compliance

## Project Structure

```
src/
├── components/
│   ├── LeftMenu.tsx      # Collapsible sidebar navigation
│   ├── Nav.tsx           # Top navigation bar
│   ├── RibbonMenu.tsx    # Contextual action ribbon
│   └── Counter.tsx       # Example component
├── routes/
│   ├── index.tsx         # Home page with ribbon menu
│   ├── about.tsx         # About page
│   └── reports.tsx       # Reports page
├── app.tsx               # Main app layout
├── entry-client.tsx      # Client-side entry point
└── entry-server.tsx      # Server-side rendering
```

## Configuration

- **PWA**: Configured in `app.config.ts` with vite-plugin-pwa
- **Tailwind**: Styling configuration in `src/app.css`
- **Docker**: Multi-stage build optimized for production

## Contributing

1. Install dependencies with `bun install`
2. Start development server with `bun run dev`
3. Make your changes
4. Test PWA functionality
5. Build and test with Docker if needed

## License

This project is part of the 361 Ops Centre platform.
