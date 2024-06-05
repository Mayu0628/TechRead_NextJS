"use client";

import React, { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventDialog from "./component/EventDialog";
import "@/styles/globals.css";

const CalendarIconComponent = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <CalendarMonthIcon onClick={handleClickOpen} className="icon" />
      <EventDialog open={open} onClose={handleClose} />
    </div>
  );
};

export default CalendarIconComponent;
