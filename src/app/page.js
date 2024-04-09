"use client";

import {
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  Input,
  TextField,
  Tooltip,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import axios from "axios";
import { InputFileUpload, Container, StyledButton } from "./styles";
import DialogInfo from "components/DialogInfo";
import TextInputDebounced from "components/TextInputDebounced";

export default function Home() {
  const [files, setFiles] = useState([]);
  const [results, setResults] = useState([]);
  const [errorText, setErrorText] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  const [topChattiest, setTopChattiest] = useState(0);

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
    setTopChattiest(0);
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
    handleError('File type is not supported. Please only upload ".txt" files.');
  };

  const handleTextInput = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => {
      setTopChattiest(event.target.value);
      console.log(event.target.value);
    }, 500);
    setTimeoutId(timeout);
  };

  return (
    <Container>
      <Box className={"upload-box"}>
        <Box className={"title-box"}>
          <h1>Upload a log file (.txt)</h1>
          <DialogInfo />
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
              <TextInputDebounced
                label={"Top # chattiest"}
                setText={setTopChattiest}
                type="number"
                disabled={files.length < 1}
              />
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
            results
              .slice(
                0,
                !topChattiest || topChattiest === 0
                  ? results.length
                  : topChattiest
              )
              .map((result, index) => (
                <div key={index}>
                  {index + 1}. {result.user} - {result.count} words
                </div>
              ))}
        </Box>
      </Box>
    </Container>
  );
}
