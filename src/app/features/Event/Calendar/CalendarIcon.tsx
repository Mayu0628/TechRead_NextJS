"use client";

import React, { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Input from "@/components/elements/input/Input";

const CalendarIcon = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <CalendarMonthIcon onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">イベント作成</DialogTitle>
        <DialogContent>
          <DialogActions>
            <form>
              <Input type="text" name="book" placeholder="書籍名" />
              <Input type="text" name="time" placeholder="日付" />
              <Input type="text" name="member" placeholder="メンバーを追加" />
              <Input type="text" name="place" placeholder="場所を追加" />
            </form>
          </DialogActions>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Disagree</button>
          <button onClick={handleClose} autoFocus>
            Agree
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CalendarIcon;
