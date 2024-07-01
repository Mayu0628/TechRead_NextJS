import React from "react";

import DescriptionIcon from "@mui/icons-material/Description";
import { Grid, IconButton } from "@mui/material";

const MeetingNotesIcon = () => {
  return (
    <Grid container justifyContent="center">
      <IconButton>
        <DescriptionIcon sx={{ fontSize: 25 }} />
      </IconButton>
    </Grid>
  );
};

export default MeetingNotesIcon;
