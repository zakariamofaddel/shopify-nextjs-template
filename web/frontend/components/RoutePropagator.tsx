import { RoutePropagator as AppBridgeRoutePropagator } from "@shopify/app-bridge-react";
import { useRouter } from "next/router";

function RoutePropagator(props) {
  const router = useRouter();

  return <AppBridgeRoutePropagator location={router.route} />;
}

export default RoutePropagator;
