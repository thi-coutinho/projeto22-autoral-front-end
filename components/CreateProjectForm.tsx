"use client";

import { FormEvent, useState } from "react";
import SnackAlert from "./SnackAlert";
import Input from "./Input";
import { Button } from "@mui/material";
import projectApi, { IbodyCreateProject } from "@/services/projectApi";
import useToken from "@/hooks/useToken";
import { useSetRefresh } from "@/hooks/useRefresh";
type props = {
  projectName?: string;
  projectObjective?: string;
  projectImageURL?: string;
  id?: number;
  handleClose: () => void;
};
export default function CreateProjectForm(projectProps: props) {
  const [name, setName] = useState(projectProps.projectName ?? "");
  const [objective, setObjective] = useState(
    projectProps.projectObjective ?? ""
  );
  const [imageURL, setImageURL] = useState(projectProps.projectImageURL ?? "");
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const token = useToken();
  const setRefresh = useSetRefresh();

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const body: IbodyCreateProject & { id?: number } = { name };
      if (imageURL) body.imageURL = imageURL;
      if (objective) body.objective = objective;
      if (projectProps.id) body.id = projectProps.id;
      const project = await projectApi.createProject(body, token);
      if (projectProps.id) setAlertMessage("Project updated!");
      else setAlertMessage("Project created!");
      setRefresh((prev) => !prev);
    } catch (err) {
      setAlertMessage("Something went wrong");
    } finally {
      setAlert(true);
      projectProps.handleClose();
    }
  }

  return (
    <div className=" flex flex-col justify-center items-center bg-background ">
      <SnackAlert
        message={alertMessage}
        setShow={setAlert}
        severity={
          alertMessage === "Something went wrong" ? "warning" : "success"
        }
        show={alert}
        key={alertMessage}
      />
      <form
        onSubmit={submit}
        className="flex flex-col w-full justify-center items-center gap-4 p-8"
      >
        <Input
          label="Your great title"
          color={name?.length > 3 ? "success" : "warning"}
          value={name}
          setValue={setName}
        />
        <Input
          label="Objective"
          value={objective}
          setValue={setObjective}
          optional
        />
        <Input
          label="Image URL"
          type="url"
          value={imageURL}
          setValue={setImageURL}
          optional
        />
        <Button variant="contained" type="submit">
          {projectProps.id ? "Update Project" : "Let`s begin creating!"}
        </Button>
      </form>
    </div>
  );
}
