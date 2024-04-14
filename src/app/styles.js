import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  alignItems: "center",
  h2: {
    color: theme.palette.secondary.main,
    fontSize: "3rem",
    textDecoration: "underline",
  },
  // "& .MuiAutocomplete-inputRoot": {
  //   borderColor: "orange",
  // },
}));

export const Container = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: "1fr 0.75fr",
  "@media (max-width: 640px)": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem",
  },
  alignItems: "center",
  justifyItems: "center",
  height: "100%",
  width: "100%",
  maxWidth: "1024px",
  margin: "auto",
  "& .title-box": { display: "flex", alignItems: "center", gap: "8px" },
  minHeight: "300px",
  "& .upload-box": {
    alignItems: "center",

    minHeight: "300px",
    // width: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
  },
  "& .upload-box-inner": {
    // minHeight: "300px",
    padding: "1rem",
    borderRadius: "25px",
    background: theme.palette.background.paper,
    "@media (max-width: 640px)": {
      height: "10rem",
    },

    // border: "2px dotted black",
    boxShadow: "0px 5px 30px 5px black",
    width: "90%",
  },
  "& .results-box": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },
  "& .results-box-inner": {
    padding: "1rem",
    // border: "1px solid black",
    borderRadius: "25px",
    boxShadow: "0px 5px 30px 5px black",

    overflow: "scroll",
    background: theme.palette.background.paper,
    "&::-webkit-scrollbar": {
      display: "none",
    },

    width: "100%",
    height: "350px",
    // overflow: "auto",
    scrollPadding: 0,
    "&.success": {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
  },
  "& .error-text": {
    color: "red",
    fontWeight: 800,
  },
}));

export const StyledButton = (props) => {
  const StyledButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    borderRadius: "15px",
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    width: "60px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "white",
    },
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
  }));
  return (
    <StyledButton
      type="button"
      variant="outlined"
      {...props}
    />
  );
};
