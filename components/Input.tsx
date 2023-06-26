import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface inputProps {
  className?: string;
  type?: "email" | "password" | "url";
  label: string;
  value: string;
  multiline?: boolean;
  color?: "success" | "warning" | "info" | "error" | "primary" | "secondary";
  optional?: boolean;
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
      multiline={props.multiline ?? false}
      required={props.optional ? false : true}
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
