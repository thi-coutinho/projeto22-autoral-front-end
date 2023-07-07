import { DragEvent, useState } from "react";
import Arrow, { ArrowProps } from "./Arrow";
import { Dispatch, SetStateAction } from "react";
import { IMousePositionOnCanvas } from "@/app/dashboard/[projectId]/page";

type props = {
  canCreate: boolean;
  firstClick: IMousePositionOnCanvas;
  currentMouse: IMousePositionOnCanvas;
  setCurrentMouse: Dispatch<SetStateAction<IMousePositionOnCanvas>>;
  setFirstClick: Dispatch<SetStateAction<IMousePositionOnCanvas>>;
};
export default function Arrows({
  canCreate,
  currentMouse,
  setCurrentMouse,
  firstClick,
  setFirstClick,
}: props) {
  const [arrows, setArrows] = useState<ArrowProps[]>([]);

  function createArrow() {
    if (!currentMouse || !firstClick) return;
    setArrows((prev) => [
      ...prev,
      {
        endPoint: { x: currentMouse.left, y: currentMouse.top },
        startPoint: { x: firstClick.left, y: firstClick.top },
      },
    ]);
    setCurrentMouse(null);
    setFirstClick(null);
  }
  return (
    <>
      {canCreate && currentMouse && firstClick && (
        <div
          className="bg-transparent absolute h-full w-full z-40"
          onClick={createArrow}
        >
          <Arrow
            startPoint={{ x: firstClick.left, y: firstClick.top }}
            endPoint={{ x: currentMouse.left, y: currentMouse.top }}
          />
        </div>
      )}
      {arrows.map(({ startPoint, endPoint }, i) => (
        <Arrow key={i} startPoint={startPoint} endPoint={endPoint} />
      ))}
    </>
  );
}
