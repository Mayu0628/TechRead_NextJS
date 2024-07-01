import styles from "@/features/Toppage/Minutes/MinutesMain.module.css";
import ChapterDetail from "@/features/Toppage/Minutes/component/ChapterDetail";
import ChapterList from "@/features/Toppage/Minutes/component/ChapterList";

const MinutesMain = () => {
  return (
    <div className={styles.minutescontainer}>
      <h4>リーダブルコード</h4>
      <div className={styles.maincontainer}>
        <ChapterList />
        <ChapterDetail />
      </div>
    </div>
  );
};

export default MinutesMain;
