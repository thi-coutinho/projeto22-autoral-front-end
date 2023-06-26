import { Tooltip, SvgIconTypeMap } from "@mui/material";
import StraightIcon from "@mui/icons-material/Straight";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import TimelineIcon from "@mui/icons-material/Timeline";
import PanToolIcon from "@mui/icons-material/PanTool";
import { IElement, IMousePositionOnCanvas } from "@/app/dashboard/page";
import { Dispatch, SetStateAction } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type props = {
  setElement: Dispatch<SetStateAction<IElement>>;
  element: IElement;
  setFirstClick: Dispatch<SetStateAction<IMousePositionOnCanvas>>;
};

export default function ToolBox({ element, setElement, setFirstClick }: props) {
  const Icons: {
    component: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
      muiName: string;
    };
    elementText: IElement;
  }[] = [
    { component: StraightIcon, elementText: "Arrow" },
    { component: TextFieldsIcon, elementText: "Text" },
    { component: CheckBoxOutlineBlankIcon, elementText: "Box" },
    { component: TimelineIcon, elementText: "Line" },
    { component: PanToolIcon, elementText: "None" },
  ];
  return (
    <div className="bg-white w-fit h-fit flex items-center text-black p-2 rounded-lg gap-3 shadow-md shadow-black absolute top-2 inset-x-0 mx-auto">
      {Icons.map((obj, i) => (
        <Tooltip
          key={i}
          title={
            obj.elementText === "None" ? "Pan" : `Create ${obj.elementText}`
          }
        >
          <obj.component
            onClick={(e) => {
              e.stopPropagation();
              setElement(obj.elementText);
              setFirstClick(null);
            }}
            className="rounded hover:bg-slate-200 p-1 cursor-pointer"
            sx={{
              outline: `${
                element === obj.elementText ? "solid 0.5px red" : "none"
              }`,
            }}
          />
        </Tooltip>
      ))}
    </div>
  );
}
