import { useMemo, useState } from "react";
import { Provider } from "@shopify/app-bridge-react";
import { Banner, Layout, Page } from "@shopify/polaris";
import { useRouter } from "next/router";

declare var API_KEY: string | undefined;

/**
 * A component to configure App Bridge.
 * @desc A thin wrapper around AppBridgeProvider that provides the following capabilities:
 *
 * 1. Ensures that navigating inside the app updates the host URL.
 * 2. Configures the App Bridge Provider, which unlocks functionality provided by the host.
 *
 * See: https://shopify.dev/apps/tools/app-bridge/react-components
 */

type AppBridgeProviderProps = {
  children: React.ReactNode;
  incomingHost: string | undefined;
};

export function AppBridgeProvider({
  incomingHost,
  children,
}: AppBridgeProviderProps) {
  const router = useRouter();
  // The host may be present initially, but later removed by navigation.
  // By caching this in state, we ensure that the host is never lost.
  // During the lifecycle of an app, these values should never be updated anyway.
  // Using state in this way is preferable to useMemo.
  // See: https://stackoverflow.com/questions/60482318/version-of-usememo-for-caching-a-value-that-will-never-change
  const [appBridgeConfig] = useState(() => {
    const host = incomingHost || (router.query?.host as string);

    return {
      host,
      apiKey: API_KEY,
      forceRedirect: true,
    };
  });

  // if (!process.env.SHOPIFY_API_KEY || !appBridgeConfig.host) {
  //   console.warn("App Bridge is not configured. Skipping...");
  //   return;
  // }

  return <Provider config={appBridgeConfig}>{children}</Provider>;
}
