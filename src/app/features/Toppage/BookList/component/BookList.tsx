import styles from "@/features/Toppage/BookList/component/BookList.module.css";
import "@/styles/globals.css";

const BookList = () => {
  return (
    <div className={styles.chapterlistcontainer}>
      <h4>書籍一覧</h4>
      <div className="">
        <ul>
          <li># リーダブルコード</li>
          <li># エンジニアのすすめ</li>
        </ul>
      </div>
    </div>
  );
};

export default BookList;
