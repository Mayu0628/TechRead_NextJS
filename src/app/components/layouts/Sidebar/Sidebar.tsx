import React from "react";
import Image from "next/image";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarIcon from "@/features/Event/Calendar/CalendarIcon";
import styles from "@/components/layouts/Sidebar/Sidebar.module.css";
import Noimg from "@/assets/images/noimg.jpeg";

const Sidebar = () => {
  return (
    <div className={styles.background}>
      <div>
        <Image src={Noimg} alt="No Image" className={styles.no_Img} />
        <CalendarIcon />
        <DescriptionIcon />
      </div>
      <div className={styles.under_Icon}>
        <SettingsIcon />
      </div>
    </div>
  );
};

export default Sidebar;
