"use client";
import AddProjectCard from "@/components/AddProjectCard";
import CreateProjectForm from "@/components/CreateProjectForm";
import MenuModal from "@/components/MenuModal";
import ProjectCard from "@/components/ProjectCard";
import useToken from "@/hooks/useToken";
import projectApi from "@/services/projectApi";
import { useEffect, useState } from "react";

export type projectObject = {
  id: number;
  name: string;
  objective?: string;
  createdAt: Date;
  imageURL?: string;
};

export default function Page() {
  const [openCreateProjectMenu, setOpenCreateProjectMenu] = useState(false);
  const handleOpen = () => setOpenCreateProjectMenu(true);
  const handleClose = () => setOpenCreateProjectMenu(false);
  const [projects, setProjects] = useState<projectObject[]>([]);
  const token = useToken();

  useEffect(() => {
    async function getProjects() {
      const response = await projectApi.getAll(token);
      console.log(response);
      setProjects(response);
    }
    getProjects();
  }, [token]);

  return (
    <div className="bg-slate-800 w-full h-full px-8 pt-6 grid grid-cols-2 md:grid-cols-3 md:px-16 lg:grid-cols-4 lg:px-40 gap-5">
      <AddProjectCard handleOpen={handleOpen} />
      {projects.map((p) => (
        <ProjectCard
          key={p.id}
          id={p.id}
          createdAt={p.createdAt}
          name={p.name}
          objective={p.objective}
        />
      ))}
      <MenuModal handleClose={handleClose} open={openCreateProjectMenu}>
        <CreateProjectForm />
      </MenuModal>
    </div>
  );
}
