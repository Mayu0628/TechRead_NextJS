import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarIcon from "@/features/Event/Calendar/CalendarIcon";

const Sidebar = () => {
  return (
    <div>
      <p>image</p>
      <div className="icon">
        <CalendarIcon />
        <DescriptionIcon />
      </div>
      <SettingsIcon />
    </div>
  );
};

export default Sidebar;
