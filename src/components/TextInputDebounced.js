import { TextField } from "@mui/material";
import { useState } from "react";

function TextInputDebounced({ setText, label, type, ...props }) {
  const [timeoutId, setTimeoutId] = useState(null);
  const handleTextInput = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => {
      setText(
        type === "number" ? Number(event.target.value) : event.target.value
      );
      //   console.log(event.target.value);
    }, 500);
    setTimeoutId(timeout);
  };

  return (
    <TextField
      type={type}
      label={label}
      onChange={(event) => {
        handleTextInput(event);
      }}
      {...props}
    />
  );
}

export default TextInputDebounced;
