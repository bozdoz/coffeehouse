import "./page.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <article>
        <p className="center">Bring anything</p>
        <p className="center">Do anything</p>
      </article>
      <article>
        <h2>FAQ</h2>
        <h4>Can I perform the dance from Napolean Dynamite?</h4>
        <p className="center">You sure can!</p>
      </article>
      <Footer />
    </main>
  );
}
