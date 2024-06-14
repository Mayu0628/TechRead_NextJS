import styles from "@/features/Toppage/Minutes/MinutesMain.module.css";
import ChapterDetail from "@/features/Toppage/Minutes/component/ChapterDetail";
import ChapterList from "@/features/Toppage/Minutes/component/ChapterList";

const MinutesMain = () => {
  return (
    <div className={styles.minutescontainer}>
      <ChapterList />
      <ChapterDetail />
    </div>
  );
};

export default MinutesMain;
