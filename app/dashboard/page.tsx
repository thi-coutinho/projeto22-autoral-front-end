"use client";
import Ideia from "@/components/Ideia";
import { MouseEvent, useContext, useEffect, useState } from "react";
import { Zoom } from "@mui/material";
import UserContext from "@/contexts/UserContext";

export type Iideia = {
  left: number;
  top: number;
  text: string;
};

export default function Dashboard() {
  const [ideias, setIdeias] = useState<Iideia[]>([]);
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
      className="w-full h-full overflow-auto bg-slate-500 ml-28 rounded-3xl p-8 relative"
      onClick={(e) => createIdeia(e)}
    >
      <div className="bg-transparent min-h-full min-w-full p-32">
        {ideias.map((ideia, i) => (
          <Ideia
            left={ideia.left}
            top={ideia.top}
            text={ideia.text}
            key={i}
            setIdeias={setIdeias}
          />
        ))}
      </div>
    </div>
  );
}
