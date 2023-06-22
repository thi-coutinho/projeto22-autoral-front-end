import {
  Dispatch,
  DragEvent,
  KeyboardEvent,
  MouseEvent,
  SetStateAction,
  useState,
} from "react";
import Input from "./Input";
import IdeiaActions from "./IdeiaActions";
import { Iideia } from "@/app/dashboard/page";
type IdeiaProps = {
  top: number;
  left: number;
  text: string;
  id: number;
  setIdeias: Dispatch<SetStateAction<Iideia[]>>;
};
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { Zoom } from "@mui/material";

export default function Ideia(ideia: IdeiaProps) {
  const [top, setTop] = useState(ideia.top);
  const [left, setLeft] = useState(ideia.left);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState(ideia.text);
  const [editText, setEditText] = useState(ideia.text === "" ? true : false);
  const [showActions, setShowActions] = useState(false);

  function stopBubble(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    if (e.nativeEvent.button === 0) setEditText(true);
    if (e.nativeEvent.button === 2) setShowActions((e) => !e);
  }
  function setPosition(e: DragEvent) {
    e.preventDefault();
    setLeft(left + (e.clientX - mousePosition.x));
    setTop(top + (e.clientY - mousePosition.y));
  }

  function handleDragStart(e: DragEvent) {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  function createIdeia<T>(e: KeyboardEvent<T>) {
    if (e.key === "Enter" && !e.shiftKey) {
      setText((prev) => prev.slice(0, -1));
      setEditText((e) => !e);
    }
    if (e.key === "Escape") {
      setText((e) => e);
      setEditText((e) => !e);
      if (text === "") {
        ideia.setIdeias((prev) =>
          prev.filter((item, index) => index !== ideia.id)
        );
      }
    }
  }

  return (
    <Zoom in>
      <div
        className={`absolute z-10 bg-primary p-4 rounded-xl hover:resize whitespace-pre-wrap`}
        draggable
        style={{ top: `${top}px`, left: `${left}px` }}
        onClick={(e) => stopBubble(e)}
        onContextMenu={stopBubble}
        onDragEnd={(e) => setPosition(e)}
        onDragStart={(e) => handleDragStart(e)}
        onKeyUp={createIdeia}
      >
        {text === "" || editText ? (
          <Input
            label={text.split(" ").length > 3 ? "Máx 3 palavras" : "Digite"}
            value={text}
            multiline
            setValue={setText}
            color={text.split(" ").length > 3 ? "warning" : "primary"}
          />
        ) : (
          text
        )}
        {
          <IdeiaActions
            parentLeft={left}
            parentTop={top}
            originalIdeia={text}
            setIdeias={ideia.setIdeias}
            showActions={showActions}
          />
        }
      </div>
    </Zoom>
  );
}
