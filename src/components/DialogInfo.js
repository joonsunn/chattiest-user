"use client";

import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Tooltip,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import { StyledButton } from "../app/styles";
import { saveAs } from "file-saver";

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const text = `<user1> The quick brown fox jumps
  <user2> Why is the fox jumping?
  Did it step on fire?
  <user1> Bruh why you interrupt!
  <user3> I want milk
  <user3> This chat is boring
  <user3> I want roti canai
  <user2> lol you need to chill
  The night is still young why you stress
  <user1> yo I'm just trying to test this
  Please play along!`;

  const text2 =
    "< > surrounds a username. Words followed by it until the next username will be attributed to that user.";

  const handleDownload = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "chatlog.txt");
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
    >
      <DialogContent
        sx={{ display: "flex", gap: "25px", flexDirection: "column" }}
      >
        <span>Chat log file to be in the following format:</span>
        <Box sx={{ whiteSpace: "pre" }}>{text}</Box>
        <span>{text2}</span>
      </DialogContent>
      <DialogActions>
        <StyledButton
          onClick={handleDownload}
          sx={{ width: "fit-content" }}
        >
          Download example chat log file
        </StyledButton>

        <StyledButton onClick={handleClose}>Close</StyledButton>
      </DialogActions>
    </Dialog>
  );
}

function DialogInfo() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
      }}
    >
      <Box
        onClick={handleClickOpen}
        sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <Tooltip title="Info on log file format">
          <InfoIcon />
        </Tooltip>
      </Box>
      <SimpleDialog
        open={open}
        onClose={handleClose}
      />
    </Box>
  );
}

export default DialogInfo;
