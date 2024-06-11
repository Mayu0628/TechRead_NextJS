import ChapterList from "@/features/Toppage/ChapterList/component/ChapterList";
import MinutesDetail from "@/features/Toppage/Minutes/component/MinutesDetail";
import "@/styles/globals.css"

export default function Home() {
  return (
    <main className="maincontainer">
      <ChapterList />
      <MinutesDetail />
    </main>
  );
}
