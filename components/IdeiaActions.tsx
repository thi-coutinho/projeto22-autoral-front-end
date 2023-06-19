import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Fab, Zoom } from "@mui/material";
import { Dispatch, MouseEvent, SetStateAction, useContext } from "react";
import { Iideia } from "@/app/dashboard/page";
import { expandIdeia } from "@/services/expandIdeiaApi";
import UserContext from "@/contexts/UserContext";

type props = {
  parentTop: number;
  parentLeft: number;
  showActions: boolean;
  originalIdeia: string;
  setIdeias: Dispatch<SetStateAction<Iideia[]>>;
};
export default function IdeiaActions({
  parentTop,
  parentLeft,
  showActions,
  originalIdeia,
  setIdeias,
}: props) {
  const {
    userData: { token },
  } = useContext(UserContext);

  async function createNewIdeias(e: MouseEvent) {
    e.stopPropagation();
    const objective =
      "criar o layout de website de e-commerce especializado em  smartphones";
    let text1, text2, text3;
    try {
      const newIdeas = await expandIdeia(
        {
          ideia: originalIdeia,
          position: { left: parentLeft, top: parentTop },
          objective,
        },
        token
      );
      [text1, text2, text3] = newIdeas.content.split(";");
      console.log(newIdeas);
    } catch (error) {
      console.log(error);
    }
    const newIdeia1 = {
      left: parentLeft - 160,
      top: parentTop + 140,
      text: text1,
    };
    const newIdeia2 = {
      left: parentLeft,
      top: parentTop + 160,
      text: text2,
    };
    const newIdeia3 = {
      left: parentLeft + 160,
      top: parentTop + 140,
      text: text3,
    };
    setIdeias((prev) => {
      const updatedIdeas = [...prev, newIdeia1, newIdeia2, newIdeia3];
      return updatedIdeas;
    });
  }

  return (
    <Zoom in={showActions}>
      <div className="absolute p-2 -top-10 -right-20 rounded-xl flex items-center justify-center gap-2 bg-slate-600">
        <Fab size="small" color="primary" aria-label="add">
          <AddIcon onClick={createNewIdeias} />
        </Fab>
        <Fab size="small" color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>{" "}
      </div>
    </Zoom>
  );
}
