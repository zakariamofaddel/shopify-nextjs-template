## IMPORTANT

It seems like there is an issue (at least on windows) where after turning off the server, the node processes are not killed and it creates an issue where the app hangs at startup.

To solve I currently kill all node processes by running `taskkill /f /im node.exe` on windows.

The issue is due to CLI V3 process handling and has been reported [here](https://github.com/Shopify/cli/issues/630)

## Requirements

- If you don’t have one, [create a Shopify partner account](https://partners.shopify.com/signup).
- If you don’t have one, [create a Development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) where you can install and test your app.

## Run your app

- Run this command in the root folder, it will automatically install the dependencies in your `/web` folder:
  ```
  yarn dev
  ```

## License

This respository is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
