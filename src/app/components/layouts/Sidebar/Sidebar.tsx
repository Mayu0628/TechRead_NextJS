import React from "react";

import Image from "next/image";

import Noimg from "@/assets/images/noimg.jpeg";
import styles from "@/components/layouts/Sidebar/Sidebar.module.css";
import CalendarIcon from "@/features/Event/Calendar/CalendarIcon";
import MeetingNotesIcon from "@/features/MeetingNotes/MeetingNotesIcon";
import SettingIcon from "@/features/setting/SettingIcon";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.nav_container}>
        <Image src={Noimg} alt="No Image" className={styles.noImg} />
        <CalendarIcon />
        <MeetingNotesIcon />
      </div>
      <div>
        <SettingIcon />
      </div>
    </div>
  );
};

export default Sidebar;
