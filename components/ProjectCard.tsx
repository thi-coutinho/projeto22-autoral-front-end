"use client";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import { CardActionArea } from "@mui/material";
import { projectObject } from "@/app/dashboard/page";
import Image from "next/image";
import coverProjectSmall from "public/coverProjectSmall.jpg";
import MenuModal from "./MenuModal";
import { useState } from "react";
import DeleteProjectModal from "./DeleteProjectModal";
import CreateProjectForm from "./CreateProjectForm";
import { useRouter } from "next/navigation";

export default function ProjectCard({
  id,
  createdAt,
  name,
  imageURL,
  objective,
}: projectObject) {
  const [openDeleteMenu, setOpenDeleteMenu] = useState(false);
  const handleOpenDelete = () => setOpenDeleteMenu(true);
  const handleCloseDelete = () => setOpenDeleteMenu(false);
  const [openEditMenu, setOpenEditMenu] = useState(false);
  const handleOpenEdit = () => setOpenEditMenu(true);
  const handleCloseEdit = () => setOpenEditMenu(false);

  const date = new Date(createdAt);
  const router = useRouter();

  return (
    <Card sx={{ maxWidth: 345 }} className="h-[300px]">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Profile icon">
            <PersonIcon />
          </Avatar>
        }
        title={name}
        subheader={date.toLocaleDateString("en", { dateStyle: "long" })}
      />
      <CardActionArea onClick={() => router.push(`/dashboard/${id}`)}>
        <Image
          src={coverProjectSmall}
          alt="standard image"
          className="max-h-[100px] object-cover block"
        />

        <CardContent>
          <Typography variant="body2" className="text-ellipsis line-clamp-2">
            {objective}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="justify-end relative bottom-0">
        <IconButton aria-label="edit project" onClick={handleOpenEdit}>
          <EditNoteIcon />
        </IconButton>
        <IconButton aria-label="delete project" onClick={handleOpenDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
      <MenuModal handleClose={handleCloseDelete} open={openDeleteMenu}>
        <DeleteProjectModal projectId={id} handleClose={handleCloseDelete} />
      </MenuModal>
      <MenuModal handleClose={handleCloseEdit} open={openEditMenu}>
        <CreateProjectForm
          id={id}
          projectImageURL={imageURL}
          projectName={name}
          projectObjective={objective}
          handleClose={handleCloseEdit}
        />
      </MenuModal>
    </Card>
  );
}
