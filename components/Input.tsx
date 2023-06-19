import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface inputProps {
  className?: string;
  type?: "email" | "password";
  label: string;
  value: string;
  color?: "success" | "warning" | "info" | "error" | "primary" | "secondary";
  setValue: Dispatch<SetStateAction<string>>;
}

export default function Input<T>(props: inputProps) {
  return (
    <TextField
      label={props.label}
      variant="filled"
      type={props.type || "text"}
      value={props.value}
      color={props.color ?? "primary"}
      onChange={(e) => props.setValue(e.target.value)}
      helperText="Digite aqui"
      autoFocus={true}
      required
      sx={{
        "& .MuiInputBase-input": {
          color: "white",
          borderRadius: "1px",
        },
      }}
      fullWidth
    ></TextField>
  );
}
