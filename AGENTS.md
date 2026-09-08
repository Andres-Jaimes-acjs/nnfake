# nufake

Fake Nu Colombia banking UI. JS/JSX only (no TypeScript, no router, no tests). Package manager is **pnpm**.

## Commands

- `pnpm dev` — Vite dev server
- `pnpm lint` — ESLint (`**/*.{js,jsx}`, ignores `dist`)
- `pnpm build` / `pnpm preview`

No test or typecheck scripts.

## Architecture

- Entry: `src/main.jsx` → `App.jsx`. Screens live in `src/vistas/`.
- Navigation is `vista` state in `App.jsx`: `auth` → `home` → `account` → `cajitas`; `home` → `perfil`. Pass callbacks (`onBack`, `onLogin`, etc.), do not add react-router unless asked.
- `Home.jsx` default-exports `DashboardScreen`. `auth.jsx` is the only lowercase filename.
- Tailwind v4 via `@tailwindcss/vite`. CSS entry is only `@import "tailwindcss"` in `src/index.css` — no `tailwind.config`. Brand purple: `#820AD1`.

## Balances

Seed: `src/data/saldos.json` (`saldoDisponible`, `totalCajitas`, `rendimiento`, `cdt`). Runtime source of truth is `localStorage` key `nuFake_saldos`. Editing the JSON does nothing if that key already exists.

- Home shows `saldoDisponible`.
- Account shows `totalCajitas + cdt` as the big amount (labeled “Saldo disponible”).
- Cajitas total is `totalCajitas + cdt`. Second box is CDT at a fixed `12% E.A.`
- `PerfilScreen` writes localStorage and returns to home. Old saves without `cdt` default to `0`.

Money display is COP-style (`$1.234,56`). `formatearDinero` is copied in Home, AccountDetail, and CajitasList — keep them in sync or extract.

Auth: only “Usar Face ID” calls `onLogin`; the password button is a no-op.
