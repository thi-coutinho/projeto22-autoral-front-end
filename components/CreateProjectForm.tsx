"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import SnackAlert from "./SnackAlert";
import Input from "./Input";
import { Button } from "@mui/material";
import projectApi, { IbodyCreateProject } from "@/services/projectApi";
import useToken from "@/hooks/useToken";
type props = {
  redirect: (projectId: string) => Promise<boolean>;
};
export default function CreateProjectForm() {
  const [name, setName] = useState("");
  const [objective, setObjective] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const router = useRouter();
  const token = useToken();
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const body: IbodyCreateProject = { name };
      if (imageURL) body.imageURL = imageURL;
      if (objective) body.objective = objective;
      const project = await projectApi.createProject(body, token);
      setAlertMessage("Project created!");
      router.push(`/dashboard/${project.id}`);
    } catch (err) {
      setAlertMessage("Something went wrong");
    } finally {
      setAlert(true);
    }
  }

  return (
    <div className=" flex flex-col justify-center items-center bg-background ">
      <SnackAlert
        message={alertMessage}
        setShow={setAlert}
        severity={alertMessage === "Project created" ? "success" : "warning"}
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
          Let`s begin creating!
        </Button>
      </form>
    </div>
  );
}
