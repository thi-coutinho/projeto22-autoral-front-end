"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type IContext = {
  refresh: boolean;
  setRefresh: Dispatch<SetStateAction<boolean>>;
};

const RefreshContext = createContext<IContext>({
  refresh: false,
  setRefresh: () => {},
});
export default RefreshContext;

type props = {
  children: React.ReactNode;
};

export function RefreshProvider({ children }: props) {
  const [refresh, setRefresh] = useState(false);

  return (
    <RefreshContext.Provider value={{ refresh, setRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
}
