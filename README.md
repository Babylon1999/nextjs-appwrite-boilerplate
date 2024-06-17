# Next.js & NextUI Template & Appwrite

A simple Nextjs boilerplate that uses NextUI and Appwrite as backend. This is mostly meant for experimenting/testing ideas.

Features:

- Login & Signup Pages
- Email verification workflow
- Gravatar integration for user avatars
- Account Page with password update form
- Protected dashboard page.

## How to Use

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Create a .env file and add your Appwrite's keys

```
APPWRITE_KEY=
APPWRITE_ENDPOINT=
APPWRITE_PROJECT=
WEBSITE_URL= for example http://localhost:3000
```

You can find step-by-step instructions on how to retrieve these keys in the appwrite docs: https://appwrite.io/docs/tutorials/nextjs-ssr-auth/step-3

### Run the development server

```bash
npm run dev
```

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).
