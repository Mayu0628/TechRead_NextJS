import "@/styles/globals.css";
import Search from "@/components/elements/Search/Search";
import BookList from "@/features/Toppage/BookList/component/BookList";
import MinutesMain from "@/features/Toppage/Minutes/MinutesMain";
import styles from "@/page.module.css";

export default function Home() {
  return (
    <main className={styles.full_screen}>
      <Search />
      <div className={styles.main_screen}>
        <BookList />
        <MinutesMain />
      </div>
    </main>
  );
}
