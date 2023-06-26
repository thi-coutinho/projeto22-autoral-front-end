"use client";
import { Avatar, Button, Card, CardContent, CardHeader } from "@mui/material";
type props = {
  handleOpen: () => void;
};
export default function AddProjectCard({ handleOpen }: props) {
  return (
    <Card className="h-[300px] max-w-[345px] flex flex-col justify-between border-4 border-slate-200 border-dashed">
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        title="Start a new Project!"
        subheader="Yet to begin"
      />
      <CardContent
        aria-label="Create Project button"
        className="grow-[3] flex h-max w-full justify-center items-center"
        // sx={{ border: "3px dashed white", margin: "6px" }}
      >
        <Button variant="contained" onClick={handleOpen}>
          create new project
        </Button>
      </CardContent>
    </Card>
  );
}
