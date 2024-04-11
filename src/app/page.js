"use client";

import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import axios from "axios";
import { Container, StyledButton } from "./styles";
import DialogInfo from "../components/DialogInfo";
import FreeSoloAutoComplete from "components/FreeSoloAutoComplete";

export default function Home() {
  const [files, setFiles] = useState([]);
  const [results, setResults] = useState([]);
  const [errorText, setErrorText] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  const [topChattiest, setTopChattiest] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("word count");

  const fileTypes = ["TXT"];

  const handleFileUpload = async (event) => {
    event.preventDefault();
    const file = Array.from(files);
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append(file[i].name, file[i]);
    }
    try {
      setIsLoading(true);
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (Object.keys(response.data).includes("error")) {
        handleError("Error: " + response.data.error);
      }
      setTimeout(() => {
        setIsLoading(false);
        setResults(response.data.data);
      }, 1000);
    } catch (error) {
      console.log("unable to read file");
      setIsLoading(false);
    }
  };

  const handleDragAndDropFile = (event) => {
    setFiles(event);
    setResults([]);
  };

  const handleReset = () => {
    setFiles([]);
    setResults([]);
    setTopChattiest(0);
    setErrorText("");
    setSortBy("word count");
  };

  const handleError = (errorText) => {
    clearTimeout(timeoutId);
    handleReset();
    setErrorText(errorText);
    const timeout = setTimeout(() => {
      setErrorText("");
    }, 1000);
    setTimeoutId(timeout);
  };

  const handleTypeError = () => {
    handleError('File type is not supported. Please only upload ".txt" files.');
  };

  const handleTextInput = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => {
      setTopChattiest(event);
    }, 200);
    setTimeoutId(timeout);
  };

  return (
    <Container>
      <Box className={"upload-box"}>
        <Box className={"title-box"}>
          <h1 className="upload">Upload a log file (.txt)</h1>
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
          </form>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "16px",
          }}
        >
          <StyledButton
            type="submit"
            disabled={files.length < 1}
            className={"submit"}
            onClick={handleFileUpload}
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
          <FreeSoloAutoComplete
            options={[1, 2, 3, 4, 5]}
            disabled={files.length < 1}
            type="number"
            value={topChattiest}
            onInputChange={(_, value) => handleTextInput(Number(value))}
            label="Top # chattiest users"
          />
        </Box>
      </Box>
      <Box className={"results-box"}>
        <h1>Results:</h1>
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            alignItems: "center",
          }}
        >
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ color: "black", "&.Mui-focused": { color: "black" } }}
          >
            Sort by:
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="word count"
            name="radio-buttons-group"
            sx={{ display: "flex", flexDirection: "row" }}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <FormControlLabel
              value="word count"
              control={<Radio />}
              label="word count"
            />
            <FormControlLabel
              value="user name"
              control={<Radio />}
              label="user name"
            />
          </RadioGroup>
        </FormControl>
        <Box
          className={`results-box-inner ${results.length > 0 ? "success" : ""}`}
        >
          {isLoading ? (
            <span>Loading results...</span>
          ) : (
            <Box className="results-box-innermost">
              {results.length > 0 &&
                results
                  .slice(
                    0,
                    !topChattiest || topChattiest === 0
                      ? results.length
                      : topChattiest
                  )
                  .sort((a, b) => {
                    if (sortBy === "word count") {
                      return b.count - a.count;
                    } else {
                      return a.user.localeCompare(b.user);
                    }
                  })
                  .map((result, index) => (
                    <div key={index}>
                      {index + 1}. {result.user} - {result.count} words
                    </div>
                  ))}
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}
