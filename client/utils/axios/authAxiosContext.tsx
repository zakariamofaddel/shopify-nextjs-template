import { AxiosInstance } from "axios";
import { createContext, useContext } from "react";

type ContextWrapperProps = {
  axios: AxiosInstance;
};

const AxiosContext = createContext<ContextWrapperProps["axios"]>(null);

export const AxiosContextWrapper: React.FC<ContextWrapperProps> = ({
  axios,
  children,
}) => {
  return (
    <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>
  );
};

export function useAxios() {
  return useContext(AxiosContext);
}
