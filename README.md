# Clerk /app root routing problem demo

1. Add `VITE_CLERK_KEY=...` to `/app/.env.local`.
2. Run `npm install; npm run dev`.
3. Go to https://localhost:3000/app/
4. It will redirect you to /app/sign-in and then immediately to /app/app/sign-in (with the correct redirect_url query param on both).
