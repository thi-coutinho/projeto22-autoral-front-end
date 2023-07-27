"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { useParams } from "next/navigation";

type ElementType = "Arrow" | "Box" | "Text" | "Line";
export type Property = { [key: string]: String | number };
export type Element = { Type: ElementType; Properties: Property[] };

export type Ipool = {
  projectId?: String;
  Elements: Element[];
};

type IContext = {
  savePool: Ipool;
  setSavePool: Dispatch<SetStateAction<Ipool>>;
};

const SavePoolContext = createContext<IContext>({
  savePool: { Elements: [] },
  setSavePool: () => {},
});
export default SavePoolContext;

type props = {
  children: React.ReactNode;
};

export function SavePoolProvider({ children }: props) {
  const { id } = useParams();
  const [savePool, setSavePool] = useState<Ipool>({
    projectId: id,
    Elements: [],
  });

  return (
    <SavePoolContext.Provider value={{ savePool, setSavePool }}>
      {children}
    </SavePoolContext.Provider>
  );
}
