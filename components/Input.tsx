import { TextField } from "@mui/material";
import { StyledEngineProvider } from "@mui/material";

interface inputProps {
  className?: string;
  type?: "email" | "password";
  label: string;
}

export default function Input(props: inputProps) {
  return (
    <StyledEngineProvider injectFirst>
      <TextField
        label={props.label}
        variant="filled"
        type={props.type || "text"}
        required
        sx={{
          "& .MuiInputBase-input": {
            color: "white",
            borderRadius: "1px",
          },
        }}
        fullWidth
      ></TextField>
    </StyledEngineProvider>
  );
}
