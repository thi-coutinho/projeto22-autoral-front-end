import { DragEvent, useState } from "react";
import Arrow, { ArrowProps } from "./Arrow";
import { Dispatch, SetStateAction } from "react";
import { IMousePositionOnCanvas } from "@/app/dashboard/[projectId]/page";
import { useSaveArrowPool } from "@/hooks/useSavePool";
import { Ipool } from "@/contexts/SavePollContext";

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
  const saveArrow = useSaveArrowPool();
  function createArrow() {
    if (!currentMouse || !firstClick) return;
    const properties = {
      endPointX: currentMouse.left,
      endPointY: currentMouse.top,
      startPointX: firstClick.left,
      startPointY: firstClick.top,
    };
    const endPointX = currentMouse.left;
    const endPointY = currentMouse.top;
    const startPointX = firstClick.left;
    const startPointY = firstClick.top;
    setArrows((prev) => [...prev, properties]);
    saveArrow({
      properties: [properties],
    });
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
            startPointX={firstClick.left}
            startPointY={firstClick.top}
            endPointX={currentMouse.left}
            endPointY={currentMouse.top}
          />
        </div>
      )}
      {/* {arrows.map(({ startPointX, startPointY, endPointX, endPointY }, i) => (
        <Arrow key={i} startPointX={startPoint} endPoint={endPoint} />
      ))} */}
      {arrows.map((props, i) => (
        <Arrow key={i} {...props} />
      ))}
    </>
  );
}
