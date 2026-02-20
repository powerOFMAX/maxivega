## Setup
```bash
npm install
cp .env.example .env
```

Configure these environment variables in `.env`:
```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

## Local development
Frontend only:
```bash
npm run dev
```

Frontend + Vercel function (`/api/contact`):
```bash
npx vercel dev
```

## Lint and format
```bash
npm run lint
npm run format
```

## Build
```bash
npm run build
```

## Vercel deployment
Set the same env vars in Vercel project settings:
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

The contact form posts to `/api/contact` and Vercel serves `api/contact.js` as a Serverless Function.
