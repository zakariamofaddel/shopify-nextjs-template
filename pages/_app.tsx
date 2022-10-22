import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { useAppBridge } from "@shopify/app-bridge-react";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import { AppBridgeProvider } from "../client/components/providers/AppBridgeProvider";
import RoutePropagator from "../client/components/RoutePropagator";
import { useInitAuthAxios } from "../client/utils/axios/useAuthAxios";
import { AxiosContextWrapper } from "../client/utils/axios/authAxiosContext";
import { userLoggedInFetch } from "../client/utils/userLoggedInFetch";

type ApolloProviderWithAuthProps = {
  children: React.ReactNode;
  isNetworkSupported: boolean;
  Component: React.ComponentType;
  isMetamask: boolean;
};

function DataFetchingProvider(props: ApolloProviderWithAuthProps) {
  const app = useAppBridge();
  const axios = useInitAuthAxios();
  const { Component } = props;

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      credentials: "include",
      fetch: userLoggedInFetch(app),
    }),
  });

  return (
    <ApolloProvider client={client}>
      <AxiosContextWrapper axios={axios}>
        <Component {...props} />
      </AxiosContextWrapper>
    </ApolloProvider>
  );
}

function MyApp({ Component, pageProps, host }) {
  return (
    <>
      <AppProvider i18n={translations} theme={{ colorScheme: "light" }}>
        <AppBridgeProvider incomingHost={host}>
          <RoutePropagator />
          <DataFetchingProvider Component={Component} {...pageProps} />
        </AppBridgeProvider>
      </AppProvider>
    </>
  );
}

MyApp.getInitialProps = async ({ ctx, res }) => {
  const host = ctx?.query?.host || ctx?.req?.params?.host;

  return {
    host,
  };
};

export default MyApp;
