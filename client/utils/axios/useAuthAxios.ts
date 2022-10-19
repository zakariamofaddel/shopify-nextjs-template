import { useAppBridge } from "@shopify/app-bridge-react";
import { getSessionToken } from "@shopify/app-bridge-utils";
import { Redirect } from "@shopify/app-bridge/actions";
import axios from "axios";

export const useInitAuthAxios = () => {
  const app = useAppBridge();

  const authAxios = axios.create();

  authAxios.interceptors.request.use((config) => {
    return getSessionToken(app).then((token) => {
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    });
  });

  authAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      const originalRequest = error.config;

      if (error.response.status === 403 && !originalRequest._retry) {
        const redirect = Redirect.create(app);
        redirect.dispatch(Redirect.Action.APP, "/auth" || "/auth");
      }
      return Promise.reject(error);
    }
  );

  return authAxios;
};
