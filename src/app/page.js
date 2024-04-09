"use client";

import Image from "next/image";
// import styles from "./page.module.css";
import { Box, Button, Card, Input } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import axios from "axios";

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

const fileTypes = ["TXT"];

export default function Home() {
  const [files, setFiles] = useState([]);
  const [results, setResults] = useState([]);
  const handleFileUpload = async (event) => {
    event.preventDefault();
    const file = Array.from(files);
    console.log(file);
    const formData = new FormData();
    formData.append("file", file[0]);
    console.log(formData);
    try {
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResults(response.data.data);

      // console.log(response.data.data);
    } catch (error) {
      console.log("unable to read file");
    }
  };

  const handleFileSelected = (event) => {
    console.log(event.target.files);
    setFiles(event.target.files);
    // console.log(event);
  };

  const handleDragAndDropFile = (event) => {
    console.log(event);
    setFiles(event);
  };

  return (
    <Box>
      <div>Hello world</div>
      <form onSubmit={(event) => handleFileUpload(event)}>
        <FileUploader
          name="file"
          types={fileTypes}
          handleChange={handleDragAndDropFile}
          multiple
        />
        <InputFileUpload onChange={handleFileSelected} />

        <Button type="submit">Submit</Button>
      </form>
      {files.length > 0 &&
        Array.from(files).map((file, index) => (
          <div key={index}>{file.name}</div>
        ))}
      {results.length > 0 &&
        results.map((result, index) => (
          <div key={index}>
            {result.user}: {result.count} words
          </div>
        ))}
    </Box>
  );
}
