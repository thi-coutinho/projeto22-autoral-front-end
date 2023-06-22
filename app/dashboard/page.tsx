"use client";
import Ideia from "@/components/Ideia";
import { MouseEvent, useContext, useEffect, useState } from "react";
import { Zoom } from "@mui/material";
import UserContext from "@/contexts/UserContext";
import ToolBox from "@/components/ToolBox";

export type Iideia = {
  left: number;
  top: number;
  text: string;
};

export type IElement = "Box" | "Text" | "Line" | "Arrow" | "None";

export default function Dashboard() {
  const [ideias, setIdeias] = useState<Iideia[]>([]);
  const [element, setElement] = useState<IElement>("Box");

  const { userData } = useContext(UserContext);
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  function createIdeia(e: MouseEvent) {
    const newIdeia = { left: e.pageX - 112 - 56, top: e.pageY - 50, text: "" };
    console.log(newIdeia);
    setIdeias([...ideias, newIdeia]);
  }

  return (
    <div
      className="w-full h-full overflow-auto bg-slate-500 rounded-3xl p-8 relative"
      onClick={(e) => createIdeia(e)}
    >
      <ToolBox element={element} setElement={setElement} />
      <div className="bg-transparent min-h-full min-w-full w-fit h-fit">
        {ideias.map((ideia, i) => (
          <Ideia
            left={ideia.left}
            top={ideia.top}
            text={ideia.text}
            key={i}
            id={i}
            setIdeias={setIdeias}
          />
        ))}
      </div>
    </div>
  );
}
