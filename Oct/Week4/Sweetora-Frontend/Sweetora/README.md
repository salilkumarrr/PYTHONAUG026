# Sweetora — Frontend

A polished, responsive React + Vite frontend for a premium Indian sweets store.

## Stack

- React
- Vite
- React Router DOM
- Lucide React
- Custom CSS
- Browser localStorage for demo cart, profile and order state

## Run locally

```bash
npm install
npm run dev
```

Then open the Vite development URL shown in your terminal.

## Production build

```bash
npm run build
npm run preview
```

## Notes

This version is intentionally frontend-only. There is no Supabase, backend server,
service-role key, database layer, or external authentication dependency.

The login/register, cart, checkout and order screens use localStorage so the
frontend can be demonstrated immediately without a backend.

For a production launch, replace those demo persistence functions with your
chosen backend/authentication service.

## Main routes

- `/`
- `/shop`
- `/product/:id`
- `/categories`
- `/about`
- `/login`
- `/register`
- `/cart`
- `/checkout`
- `/orders`
- `/profile`
- `/wishlist`
- `/privacy`
- `/terms`
