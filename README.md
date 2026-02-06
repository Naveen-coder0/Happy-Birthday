# Birthday Blossom

Birthday Blossom is a small, modern React + Vite + TypeScript web app celebrating birthdays with animated visuals, music and a guestbook powered by Supabase. It ships a collection of reusable UI components, interactive sections (wishes, messages, guestbook, memories), and fun effects like balloons, confetti, floating hearts and sparkles.

**Live Preview:** run locally with the dev server (instructions below).

## Features

- **Animations & Visuals:** Balloons, confetti, floating hearts, sparkles, and a photo slider.
- **Audio:** Integrated `MusicPlayer` component for background music.
- **Guest Interactions:** Wishes, message cards, and a guestbook section.
- **Photo gallery:** `PhotoSlider` for memories and photos shipped in `public/photos`.
- **Supabase integration:** client and types included for persisting messages and guestbook entries.
- **Responsive:** `use-mobile` hook to adjust behavior for mobile devices.

## Tech stack

- React + TypeScript
- Vite
- Tailwind CSS

## Getting started

Prerequisites: Node.js (16+) and npm (or pnpm / yarn).

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build

```bash
npm run preview
```

Run tests (vitest):

```bash
npm run test
```

## Environment & Supabase

This project includes a Supabase integration under `supabase/` and `src/integrations/supabase`. To enable backend features (guestbook/messages), set the following environment variables (or configure your Supabase client appropriately):

- `VITE_SUPABASE_URL` — your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` — your Supabase anon/public key

Add them to a `.env` file at the project root (Vite will expose `VITE_` prefixed vars to the client):

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=public-anon-key
```

There is also a `supabase/migrations/` folder with a sample SQL migration used by the project.

## Project structure (high level)

- **Public & config**
  - [index.html](index.html): app entry HTML
  - [public/photos](public/photos): bundled photos used by the slider

- **Source**
  - [src/main.tsx](src/main.tsx): app bootstrap
  - [src/App.tsx](src/App.tsx): root app component
  - [src/components](src/components): UI & interactive components
    - `Balloons`, `Confetti`, `FloatingHearts`, `Sparkles`, `GlowButton`, `MusicPlayer`, `PhotoSlider`, `WishCard`
    - `sections/`: `HeroSection`, `WishesSection`, `MessageSection`, `GuestbookSection`, `MemoriesSection`, `FinalSection`
    - `ui/`: collection of designer-friendly primitives and components
  - [src/hooks](src/hooks): `use-mobile`, `use-toast`
  - [src/integrations/supabase](src/integrations/supabase): `client.ts`, `types.ts`
  - [src/lib/utils.ts](src/lib/utils.ts): small helpers

## Notable files

- [src/components/MusicPlayer.tsx](src/components/MusicPlayer.tsx): background audio control
- [src/components/PhotoSlider.tsx](src/components/PhotoSlider.tsx): gallery component pulling from `public/photos`
- [src/components/sections/GuestbookSection.tsx](src/components/sections/GuestbookSection.tsx): guestbook UI and Supabase hooks

## Styling

This app uses Tailwind CSS with configuration in `tailwind.config.ts` and global styles in [src/index.css](src/index.css) and [src/App.css](src/App.css).

## Development tips

- To work on UI components, inspect files under [src/components/ui](src/components/ui).
- Use the `use-mobile` hook to toggle mobile-first adjustments while testing in the browser.
- Photos: add images to `public/photos` and update the slider if you want custom content.

## Contributing

If you want to contribute:

- Fork the repo, make a branch, and open a pull request with a clear description.
- Keep changes focused and add small, testable commits.

## License

This repository does not include a license file. Add a `LICENSE` if you plan to open-source the project.

---

If you'd like, I can also:

- Add a `.env.example` with the required env variables
- Add a short CONTRIBUTING.md and CODE_OF_CONDUCT
- Wire up a simple README badge for build/test status

Tell me which of the above you'd like next.
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
