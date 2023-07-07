import { useSetRefresh } from "@/hooks/useRefresh";
import useToken from "@/hooks/useToken";
import projectApi from "@/services/projectApi";
import { Button, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { useState } from "react";

type props = {
  projectId: number;
  handleClose: () => void;
};

export default function DeleteProjectModal({ projectId, handleClose }: props) {
  const [loading, setLoading] = useState(false);
  const setRefresh = useSetRefresh();
  const token = useToken();

  async function deleteProject() {
    setLoading(true);
    try {
      await projectApi.deleteById(projectId, token);
      setLoading(false);
      setRefresh((prev) => !prev);
      handleClose();
    } catch (err) {
      if (err instanceof AxiosError) console.log(err.message);
      setLoading(false);
    }
  }
  return (
    <div className="w-[600px] align-middle text-center">
      <Typography variant="h6">
        Are you sure you want to permanently delete this project?
      </Typography>
      <div className="flex items-center justify-center gap-8 mt-4">
        <Button
          type="submit"
          variant="contained"
          onClick={deleteProject}
          disabled={loading}
        >
          {!loading ? "Confirm delete" : "Deleting..."}
        </Button>
        <Button onClick={handleClose} variant="outlined" disabled={loading}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
