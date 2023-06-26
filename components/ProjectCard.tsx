"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
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
import useToken from "@/hooks/useToken";
import projectApi from "@/services/projectApi";
import coverProject from "public/coverProject.jpg";

export default function ProjectCard({
  id,
  createdAt,
  name,
  imageURL,
  objective,
}: projectObject) {
  const date = new Date(createdAt);
  const token = useToken();

  async function deleteProject() {
    await projectApi.deleteById(id, token);
  }

  return (
    <Card sx={{ maxWidth: 345 }} className="max-h-[300px]">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Profile icon">
            <PersonIcon />
          </Avatar>
        }
        title={name}
        subheader={date.toLocaleDateString("pt-br", { dateStyle: "long" })}
      />
      <CardActionArea>
        <Image
          src={coverProject}
          alt="standard image"
          className="max-h-[100px] object-cover block"
        />

        <CardContent>
          <Typography variant="body2">{objective}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="edit project">
          <EditNoteIcon />
        </IconButton>
        <IconButton aria-label="delete project" onClick={deleteProject}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
