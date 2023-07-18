import "./page.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <article>
        <p className="center">Come do something</p>
      </article>
      <Footer />
    </main>
  );
}
