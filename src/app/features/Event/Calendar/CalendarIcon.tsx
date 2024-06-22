"use client";

import React, { useState } from "react";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Grid, IconButton } from "@mui/material";

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
    <Grid container justifyContent="center" >
      <IconButton>
        <CalendarMonthIcon onClick={handleClickOpen} sx={{ fontSize: 25 }} />
      </IconButton>
      <EventDialog open={open} onClose={handleClose} />
    </Grid>
  );
};

export default CalendarIcon;
