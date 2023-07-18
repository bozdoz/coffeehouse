import TopShapes from "./shapes/TopShapes";

const Header = () => (
  <header className="header">
    <h6>BEN PRESENTS</h6>
    <h1>HALIFAX NS</h1>
    <div className="year-title">
      <aside>20</aside>
      <section>
        <h2>COFFEE HOUSE</h2>
        <h2>OPEN MIC</h2>
      </section>
      <aside>23</aside>
    </div>
    <h5>JULY 29</h5>
    <TopShapes side="left" />
    <TopShapes side="right" />
  </header>
);

export default Header;
