import styles from "@/features/Toppage/BookList/component/BookList.module.css";
import "@/styles/globals.css";

const BookList = () => {
  return (
    <div className={styles.chapter_list_container}>
      <h4>書籍一覧</h4>
      <div>
        <ul>
          <li># リーダブルコード</li>
          <li># エンジニアのすすめ</li>
        </ul>
      </div>
    </div>
  );
};

export default BookList;
