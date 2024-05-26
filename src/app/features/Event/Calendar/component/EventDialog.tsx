"use client";

import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EventForm from "./EventForm";

const EventDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">イベント作成</DialogTitle>
      <DialogContent>
        <EventForm />
      </DialogContent>
      <DialogActions>
        <button onClick={onClose}>キャンセル</button>
        <button onClick={onClose} autoFocus>
          作成
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default EventDialog;
