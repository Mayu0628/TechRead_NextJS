import "@/styles/globals.css";
import Search from "@/components/elements/Search/Search";
import BookList from "@/features/Toppage/BookList/component/BookList";
import MinutesMain from "@/features/Toppage/Minutes/MinutesMain";

export default function Home() {
  return (
    <main className="maincontainer">
      <BookList />
      <Search onSearch={handleSearch} />
      <MinutesMain />
    </main>
  );
}
