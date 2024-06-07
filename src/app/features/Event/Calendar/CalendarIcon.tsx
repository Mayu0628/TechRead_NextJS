"use client";

import React, { useState } from "react";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { IconButton } from "@mui/material";

import EventDialog from "./component/EventDialog";

import "@/styles/globals.css";

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
      <IconButton>
        <CalendarMonthIcon onClick={handleClickOpen} fontSize="large" />
      </IconButton>
      <EventDialog open={open} onClose={handleClose} />
    </div>
  );
};

export default CalendarIcon;
