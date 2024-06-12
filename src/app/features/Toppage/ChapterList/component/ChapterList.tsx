import styles from "@/features/Toppage/ChapterList/component/ChapterList.module.css";
import "@/styles/globals.css";

const ChapterList = () => {
  return (
    <div className={styles.chapterlistcontainer}>
      <h3>議事録一覧</h3>
      <div className="">
        <ul>
          <li># hogehoge</li>
          <li># hogehoge</li>
        </ul>
      </div>
    </div>
  );
};

export default ChapterList;
