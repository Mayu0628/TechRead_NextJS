"use client";

import React, { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventDialog from "./component/EventDialog";

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
      <EventDialog open={open} onClose={handleClose} />
    </div>
  );
};

export default CalendarIcon;
