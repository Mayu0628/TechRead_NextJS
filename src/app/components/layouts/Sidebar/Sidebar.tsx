import React from "react";

import DescriptionIcon from "@mui/icons-material/Description";
import { IconButton } from "@mui/material";
import Image from "next/image";

import Noimg from "@/assets/images/noimg.jpeg";
import MenuListComposition from "@/components/elements/Menu/MenuListComposition";
import styles from "@/components/layouts/Sidebar/Sidebar.module.css";
import CalendarIconComponent from "@/features/Event/Calendar/CalendarIcon";

const Sidebar = () => {
  return (
    <div className={styles.background}>
      <div>
        <Image src={Noimg} alt="No Image" className={styles.noImg} />
        <CalendarIconComponent />
        <IconButton>
          <DescriptionIcon fontSize="large" />
        </IconButton>
      </div>
      <MenuListComposition />
    </div>
  );
};

export default Sidebar;
