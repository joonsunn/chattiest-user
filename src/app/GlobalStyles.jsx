import React from "react";
import { GlobalStyles as MuiGlobalStyle } from "@mui/material";

function GlobalStyles() {
  return (
    <MuiGlobalStyle
      styles={{
        "*": {
          boxSizing: "border-box",
        },
        html: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
          scrollbarGutter: "stable",
        },
        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
        },
        "html,body": {
          maxWidth: "2560px",
          margin: "0 auto",
        },
        "#root": {
          width: "100%",
          height: "100%",
          scrollBehavior: "smooth",
        },
        "[role=button]": {
          cursor: "pointer",
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },
        ul: {
          margin: 0,
          padding: 0,
        },
        a: {
          color: "#000000",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      }}
    />
  );
}

export default GlobalStyles;
