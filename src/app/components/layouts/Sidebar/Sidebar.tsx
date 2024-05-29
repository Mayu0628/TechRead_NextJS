import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarIcon from "@/features/Event/Calendar/CalendarIcon";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.background}>
      <div className={styles.icon}>
        <CalendarIcon />
        <DescriptionIcon />
      </div>
      <SettingsIcon />
    </div>
  );
};

export default Sidebar;
