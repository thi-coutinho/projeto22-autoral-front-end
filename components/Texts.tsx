import { IMousePositionOnCanvas } from "@/app/dashboard/[projectId]/page";
import { Input } from "@mui/material";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

type props = {
  canCreate: boolean;
  firstClick: IMousePositionOnCanvas;
  setFirstClick: Dispatch<SetStateAction<IMousePositionOnCanvas>>;
};

type Itext = {
  size: number;
  top: number;
  left: number;
  text: string;
  apiSave: boolean;
};
export default function Texts({ canCreate, firstClick, setFirstClick }: props) {
  const [textElements, setTextElements] = useState<Itext[]>([]);
  const [textCreation, setTextCreation] = useState("");
  function handleCreation() {
    setTextElements((prev) => [
      ...prev,
      {
        text: textCreation,
        apiSave: false,
        left: firstClick?.left ?? 30,
        top: firstClick?.top ?? 30,
        size: 16,
      },
    ]);
    setTextCreation("");
    setFirstClick(null);
  }
  return (
    <>
      {canCreate && firstClick && (
        <Input
          type="text"
          className="bg-transparent absolute"
          autoFocus
          style={{
            fontSize: 16,
            top: firstClick.top,
            left: firstClick.left,
          }}
          value={textCreation}
          onChange={(e) => setTextCreation(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleCreation();
          }}
        />
      )}
      {textElements.map((item, i) => (
        <div
          key={i}
          className={`absolute`}
          style={{
            fontSize: item.size,
            top: item.top,
            left: item.left,
            userSelect: "none",
          }}
        >
          {item.text}
        </div>
      ))}
    </>
  );
}
