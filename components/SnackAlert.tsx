import React from "react";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
interface SnackProps {
  message: string;
  show: boolean;
  severity: AlertColor;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SnackAlert({
  message,
  show,
  severity,
  setShow,
}: SnackProps): JSX.Element {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setShow(false);
  };

  return (
    <Snackbar
      open={show}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
