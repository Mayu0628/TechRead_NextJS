import "@/styles/globals.css";
import BookList from "@/features/Toppage/BookList/component/BookList";
import MinutesMain from "@/features/Toppage/Minutes/MinutesMain";

export default function Home() {
  return (
    <main>
      <form action="#">
        <input type="text" />
      </form>
      <div className="maincontainer">
        <BookList />
        <MinutesMain />
      </div>
    </main>
  );
}
