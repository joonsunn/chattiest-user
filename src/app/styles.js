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
  //   display: "flex",
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: "1fr 1fr",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  maxWidth: "1024px",
  margin: "auto",
  //   paddingRight: "2rem",
  //   paddingLeft: "2rem",
  "& .upload-box-inner": {
    minHeight: "300px",
    border: "2px dotted black",
    width: "100%",
    padding: "1rem",
  },
  "& .results-box-inner": {
    padding: "1rem",
    border: "1px solid black",
    width: "100%",
    minHeight: "300px",
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
    width: "150px",
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
