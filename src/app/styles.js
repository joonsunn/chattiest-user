import { Box, Button, Card, Input } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export function InputFileUpload({ onChange }) {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput
        type="file"
        accept="text/plain"
        onChange={onChange}
        multiple
      />
    </Button>
  );
}

export const Container = styled(Box)({
  display: "grid",
  gap: "5rem",
  gridTemplateColumns: "1fr 0.5fr",
  alignItems: "center",
  height: "100%",
  width: "100%",
  maxWidth: "1024px",
  margin: "auto",
  "& .title-box": { display: "flex", alignItems: "center", gap: "8px" },
  minHeight: "300px",
  "& .upload-box": {
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  "& .upload-box-inner": {
    // minHeight: "300px",
    border: "2px dotted black",
    width: "100%",
    padding: "1rem",
  },
  "& .results-box-inner": {
    padding: "1rem",
    border: "1px solid black",
    width: "100%",
    height: "300px",
    overflow: "auto",
    scrollPadding: 0,
    "&.success": {
      border: "2px solid orange",
    },
  },
  "& .error-text": {
    color: "red",
    fontWeight: 800,
  },
});

export const StyledButton = (props) => {
  const StyledButton = styled(Button)({
    textTransform: "none",
    borderRadius: "15px",
    border: "1px solid black",
    color: "black",
    width: "100px",
    "&.submit": {
      "&:hover": {
        backgroundColor: "green",
        color: "white",
      },
    },
    "&.reset": {
      "&:hover": {
        backgroundColor: "darkred",
        color: "white",
      },
    },
  });
  return (
    <StyledButton
      type="button"
      variant="outlined"
      {...props}
    />
  );
};
