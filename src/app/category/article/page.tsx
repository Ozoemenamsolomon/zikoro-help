import ArticleBody from "@/components/article/ArticleBody";
import Navbar from "@/components/Navbar";

export default function Article() {
  return (
    <div>
        <div className="sticky top-4 z-10">
          <Navbar />
        </div>
      <ArticleBody/>
    </div>
  );
}
