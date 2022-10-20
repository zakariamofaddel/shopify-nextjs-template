## Requirements

- If you don’t have one, [create a Shopify partner account](https://partners.shopify.com/signup).
- If you don’t have one, [create a Development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) where you can install and test your app.
- In the Partner dashboard, [create a new app](https://help.shopify.com/en/api/tools/partner-dashboard/your-apps#create-a-new-app). You’ll need this app’s API credentials during the setup process.

## Installation

- Install dependencies

```sh
$ yarn install
```

- Connect it through CLI v2 to a manually created app in your partner dashboard:

```sh
$ shopify app connect
```

- Run:

```sh
$ shopify app serve
```

## Production

- Build the production bundle using the following command:

  ```sh
  $ yarn build
  ```

  Note that Next.Js checks typescript correctness and this previous command will fail if you have any typescript errors in your code.
  I suggest fixing the errors, but if you want to bypass typescript and still build your app, go to `next.config.js` and add the following code to your `modules.exports` object as indicated in the [official docs](https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors)

  ```javascript
  const moduleExports  = {
      typescript: {
          // !! WARN !!
          // Dangerously allow production builds to successfully complete even if
          // your project has type errors.
          // !! WARN !!
          ignoreBuildErrors: true,
      },

      ...(the rest of your configuration)
  }
  ```

- Then run this command to start the server with `NODE_ENV=production`:

```sh
$ yarn start
```

## License

This respository is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
