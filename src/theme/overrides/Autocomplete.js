export default function Autocomplete(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            // background: "orange",
            // border: `solid 1px ${theme.palette.secondary.main}`,
            "> div": {
              border: `solid 1px ${theme.palette.secondary.red}`,
            },
            // color: "red",
          },
          "& .MuiInputLabel-root": {
            // color: "red",
            background: theme.palette.background.default,
            padding: "0 5px",
          },
        },
      },
    },
  };
}
