# StreamPay Frontend

Modern landing page for StreamPay - Real-time payment streaming protocol built with Next.js 16, React 19, and Tailwind CSS v4.

## Features

- 🎨 Modern glassmorphism design with Aurora UI effects
- 🔗 Reown AppKit wallet integration
- ⚡ Real-time Web3 connectivity
- 📱 Fully responsive
- 🌙 Dark mode optimized
- ✨ Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:

Create a `.env.local` file and add your Reown Project ID:

```env
NEXT_PUBLIC_REOWN_PROJECT_ID=your_project_id_here
```

Get your project ID from [Reown Cloud](https://cloud.reown.com)

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Web3:** Reown AppKit, Wagmi, Viem
- **Fonts:** Space Grotesk, Inter

## Project Structure

```
frontend/
├── app/
│   ├── components/      # React components
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── UseCases.tsx
│   │   ├── CTA.tsx
│   │   ├── Footer.tsx
│   │   └── ConnectButton.tsx
│   ├── providers.tsx    # Web3 provider setup
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles & theme
└── public/              # Static assets
```

## Design System

### Colors
- Primary: #2454FF (Full Spectrum Blue)
- Secondary: #24E5FF (Cyan)
- Accent: #8624FF (Purple)
- Success: #53FF24 (Green)

### Typography
- Display Font: Space Grotesk (400, 500, 600, 700)
- Body Font: Inter (300, 400, 500, 600)

### Design Tokens
Custom utilities defined in `globals.css`:
- `glass-panel` - Glassmorphism effect
- `glass-light` - Light glass variant
- `gradient-primary` - Primary gradient
- `gradient-aurora` - Aurora background
- `text-gradient` - Gradient text

## License

MIT