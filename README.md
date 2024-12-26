# Resend with Next.js and Playwright

This example shows how to do E2E testing with Resend, [Next.js](https://nextjs.org), and [Playwright](https://playwright.dev).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/resend/resend-nextjs-playwright-example&project-name=resend-nextjs-playwright-example&repository-name=resend-nextjs-playwright-example&env=RESEND_API_KEY)

## Instructions

1. Define environment variables in `.env` file.

```sh
cp .env.example .env
```

2. Install dependencies:

```sh
npm install
```

3. Run Next.js locally:

```sh
npm run dev
```

4. Make a curl request

```sh
curl -X http://localhost:3000/api/send
```

## Running tests

1. Install Playwright:

```sh
npx playwright install
```

2. Run Playwright:

```sh
npx playwright test
```

## License

MIT License