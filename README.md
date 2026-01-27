# McQueen Solutions

A modern landing page built with TanStack Start, React 19, and Tailwind CSS v4.

## Prerequisites

- **Node.js** 20 or later
- **pnpm** (recommended) - Install via `corepack enable && corepack prepare pnpm@latest --activate`

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server (http://localhost:3000)
pnpm dev
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server on port 3000 |
| `pnpm build` | Build for production (outputs to `.output/`) |
| `pnpm start` | Run production server |
| `pnpm preview` | Preview production build via Vite |
| `pnpm test` | Run tests with Vitest |
| `pnpm lint` | Lint code with Biome |
| `pnpm format` | Format code with Biome |
| `pnpm check` | Run all Biome checks |

## Building for Production

```bash
# Create production build
pnpm build

# Test production build locally
pnpm start
```

The build outputs to `.output/` directory containing the Nitro server bundle.

## Deployment

### Option 1: Docker (Recommended)

The project includes a multi-stage Dockerfile optimized for production:

```bash
# Build the Docker image
docker build -t mcqueen-solutions .

# Run the container
docker run -p 3000:3000 mcqueen-solutions
```

The container:
- Uses Node.js 20 Alpine for minimal image size
- Runs as non-root user for security
- Exposes port 3000
- Sets `NODE_ENV=production`

### Option 2: Node.js Server

Deploy the `.output/` directory to any Node.js hosting:

```bash
# On your server
pnpm install --frozen-lockfile
pnpm build
node .output/server/index.mjs
```

Environment variables:
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Set to `production`

### Option 3: Cloud Platforms

The Nitro server is compatible with various platforms:

- **Railway / Render / Fly.io**: Use the Dockerfile or configure build command as `pnpm build` and start command as `node .output/server/index.mjs`
- **AWS / GCP / Azure**: Deploy the Docker container to your container service

## Project Structure

```
├── src/
│   ├── components/     # React components
│   │   ├── Header.tsx  # Site header
│   │   └── ui/         # shadcn/ui components
│   ├── routes/         # TanStack Router file-based routes
│   │   ├── __root.tsx  # Root layout (HTML shell)
│   │   └── index.tsx   # Homepage
│   ├── lib/            # Utility functions
│   ├── router.tsx      # Router configuration
│   └── styles.css      # Global styles + Tailwind
├── public/             # Static assets
├── Dockerfile          # Multi-stage Docker build
└── vite.config.ts      # Vite + TanStack Start config
```

## Technology Stack

- **[TanStack Start](https://tanstack.com/start)** - Full-stack React framework with SSR
- **[TanStack Router](https://tanstack.com/router)** - Type-safe file-based routing
- **[React 19](https://react.dev)** - UI library
- **[Vite 7](https://vite.dev)** - Build tool
- **[Tailwind CSS v4](https://tailwindcss.com)** - Utility-first CSS
- **[shadcn/ui](https://ui.shadcn.com)** - Component library
- **[Nitro](https://nitro.unjs.io)** - Server runtime
- **[Biome](https://biomejs.dev)** - Linting and formatting

## Adding UI Components

This project uses shadcn/ui with the New York style:

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add dialog
```

## Documentation

See [`plans/ARCHITECTURE.md`](plans/ARCHITECTURE.md) for detailed architecture documentation and customization guide.

## License

Private - All rights reserved.
