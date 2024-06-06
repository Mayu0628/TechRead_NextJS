import React from "react";
import Image from "next/image";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarIconComponent from "@/features/Event/Calendar/CalendarIcon";
import styles from "@/components/layouts/Sidebar/Sidebar.module.css";
import Noimg from "@/assets/images/noimg.jpeg";

const Sidebar = () => {
  return (
    <div className={styles.background}>
      <div>
        <Image src={Noimg} alt="No Image" className={styles.noImg} />
        <CalendarIconComponent />
        <DescriptionIcon className="sidebarIcon" />
      </div>
      <div className={styles.underIcon}>
        <SettingsIcon className="sidebarIcon" />
      </div>
    </div>
  );
};

export default Sidebar;
