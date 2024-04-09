"use client";

import Image from "next/image";
import { Box, Button, Card, Input, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InfoIcon from "@mui/icons-material/Info";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import axios from "axios";
import { InputFileUpload, Container, StyledButton } from "./styles";

export default function Home() {
  const [files, setFiles] = useState([]);
  const [results, setResults] = useState([]);
  const [errorText, setErrorText] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  const fileTypes = ["TXT"];

  const handleFileUpload = async (event) => {
    event.preventDefault();
    const file = Array.from(files);
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append(file[i].name, file[i]);
    }
    try {
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (Object.keys(response.data).includes("error")) {
        handleError("Error: " + response.data.error);
      }

      setResults(response.data.data);
    } catch (error) {
      console.log("unable to read file");
    }
  };

  const handleDragAndDropFile = (event) => {
    // console.log(event);
    setFiles(event);
    setResults([]);
  };

  const handleReset = () => {
    setFiles([]);
    setResults([]);
    setErrorText("");
  };

  const handleError = (errorText) => {
    clearTimeout(timeoutId);
    setErrorText(errorText);
    const timeout = setTimeout(() => {
      setErrorText("");
    }, 3000);
    setTimeoutId(timeout);
  };

  const handleTypeError = () => {
    // event.preventDefault();
    handleError('File type is not supported. Please only upload ".txt" files.');
  };

  return (
    <Container>
      <Box className={"upload-box"}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <h1>Upload a log file (.txt)</h1>
          <Tooltip title="Help">
            <InfoIcon />
          </Tooltip>
        </Box>
        <Box className={"upload-box-inner"}>
          <form onSubmit={(event) => handleFileUpload(event)}>
            <FileUploader
              name="file"
              types={fileTypes}
              handleChange={handleDragAndDropFile}
              onTypeError={handleTypeError}
              multiple
            >
              <div style={{ height: "200px" }}>
                Drag and drop your file(s) here:
                <Box
                  sx={{
                    marginTop: "24px",
                  }}
                >
                  <Box className={"error-text"}>{errorText}</Box>

                  {files.length > 0 &&
                    Array.from(files).map((file, index) => (
                      <div key={index}>
                        {index + 1}. {file.name}
                      </div>
                    ))}
                </Box>
              </div>
            </FileUploader>

            <Box sx={{ display: "flex", gap: "16px" }}>
              <StyledButton
                type="submit"
                disabled={files.length < 1}
                className={"submit"}
              >
                Upload
              </StyledButton>
              <StyledButton
                type="button"
                disabled={files.length < 1}
                onClick={handleReset}
                className={"reset"}
              >
                Reset
              </StyledButton>
            </Box>
          </form>
        </Box>
      </Box>
      <Box className={"results-box"}>
        <h1>Results:</h1>
        <Box
          className={`results-box-inner ${results.length > 0 ? "success" : ""}`}
        >
          {results.length > 0 &&
            results.map((result, index) => (
              <div key={index}>
                {index + 1}. {result.user} - {result.count} words
              </div>
            ))}
        </Box>
      </Box>
    </Container>
  );
}
