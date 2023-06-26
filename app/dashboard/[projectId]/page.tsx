"use client";
import Ideia from "@/components/Ideia";
import { MouseEvent, useContext, useEffect, useState } from "react";
import UserContext from "@/contexts/UserContext";
import ToolBox from "@/components/ToolBox";
import Texts from "@/components/Texts";
import Arrows from "@/components/Arrows";

export type IMousePositionOnCanvas = {
  left: number;
  top: number;
} | null;
export type Iideia = {
  text: string;
} & IMousePositionOnCanvas;

export type IElement = "Box" | "Text" | "Line" | "Arrow" | "None";

export default function Dashboard() {
  const [ideias, setIdeias] = useState<Iideia[]>([]);
  const [element, setElement] = useState<IElement>("None");
  const [currentMouse, setCurrentMouse] =
    useState<IMousePositionOnCanvas>(null);
  const [firstClick, setFirstClick] = useState<IMousePositionOnCanvas>(null);

  const { userData } = useContext(UserContext);
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  function createIdeia(e: MouseEvent) {
    if (firstClick) return;
    const left = e.pageX - 24;
    const top = e.pageY - 80;
    setFirstClick({ left, top });
    setCurrentMouse({ left, top });
    // console.log("px: ", e.pageX, "; py: ",e.pageY, " cx")
    if (element !== "Box") return;
    const newIdeia = {
      left,
      top,
      text: "",
    };
    console.log(newIdeia);
    setIdeias([...ideias, newIdeia]);
    setCurrentMouse(null);
  }

  function handleMouseMouse(e: MouseEvent) {
    if (!firstClick || !currentMouse) return;
    const left = currentMouse.left + e.movementX;
    const top = currentMouse.top + e.movementY;
    setCurrentMouse({ left, top });
  }

  return (
    <div
      className="w-full h-full overflow-auto bg-slate-500 rounded-3xl relative"
      onClick={(e) => createIdeia(e)}
    >
      <ToolBox
        element={element}
        setElement={setElement}
        setFirstClick={setFirstClick}
      />
      <div
        className="bg-transparent min-h-full min-w-full w-fit h-fit"
        onMouseMove={(e) => handleMouseMouse(e)}
      >
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
        <Texts
          canCreate={element === "Text"}
          firstClick={firstClick}
          setFirstClick={setFirstClick}
        />
        <Arrows
          canCreate={element === "Arrow"}
          currentMouse={currentMouse}
          setCurrentMouse={setCurrentMouse}
          firstClick={firstClick}
          setFirstClick={setFirstClick}
        />
      </div>
    </div>
  );
}
