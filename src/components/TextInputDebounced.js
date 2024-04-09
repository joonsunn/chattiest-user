import { TextField } from "@mui/material";
import { useState } from "react";

function TextInputDebounced({ setText, label, type, ...props }) {
  const [timeoutId, setTimeoutId] = useState(null);
  const [innerText, setInnerText] = useState("");
  const handleTextInput = (event) => {
    setInnerText(event.target.value);
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
      value={innerText}
      {...props}
      sx={{
        "& label.Mui-focused": {
          color: "black",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "black",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "black",
          },
          "&:hover fieldset": {
            borderColor: "black",
          },
          "&.Mui-focused fieldset": {
            borderColor: "black",
          },
        },
      }}
    />
  );
}

export default TextInputDebounced;
