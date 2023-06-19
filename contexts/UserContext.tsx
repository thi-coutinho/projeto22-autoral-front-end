"use client";
import { Dispatch, SetStateAction, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type IUser = {
  email: string;
  id: number;
};

type IUserContext = {
  token?: string | undefined;
  user?: IUser | undefined;
};

type IContext = {
  userData: IUserContext;
  setUserData: Dispatch<SetStateAction<IUserContext>>;
};

const UserContext = createContext<IContext>({
  userData: {},
  setUserData: () => {},
});
export default UserContext;

type props = {
  children: React.ReactNode;
};

export function UserProvider({ children }: props) {
  const [userData, setUserData] = useLocalStorage<IUserContext>("userData", {});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
