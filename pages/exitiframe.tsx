import { Redirect } from "@shopify/app-bridge/actions";
import { useAppBridge, Loading } from "@shopify/app-bridge-react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ExitIframe() {
  const app = useAppBridge();
  const { query } = useRouter();

  useEffect(() => {
    if (!!app && !!query) {
      const params = new URLSearchParams(query as Record<string, string>);
      const redirectUri = params.get("redirectUri");
      const url = new URL(decodeURIComponent(redirectUri));

      if (url.hostname === location.hostname) {
        const redirect = Redirect.create(app);
        redirect.dispatch(
          Redirect.Action.REMOTE,
          decodeURIComponent(redirectUri)
        );
      }
    }
  }, [app, query]);

  return <Loading />;
}
