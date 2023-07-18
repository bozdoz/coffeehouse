const TopShapes = ({ side = "left" }: { side: "left" | "right" }) => (
  <div className={`pabs ${side}-side`}>
    <div className="pabs circle light-orange s100 scale75 t10">
      <div className="s75 orange">
        <div className="s50 light-orange">
          <div className="s25 orange"></div>
        </div>
      </div>
    </div>
    <div className="pabs blue-bushes">
      <div className="pabs circle lightblue s100 scale50 t10">
        <div className="s75 blue">
          <div className="s50 lightblue">
            <div className="s25 blue"></div>
          </div>
        </div>
      </div>
      <div className="pabs circle lightblue s100 scale50 t10">
        <div className="s75 blue">
          <div className="s50 lightblue">
            <div className="s25 blue"></div>
          </div>
        </div>
      </div>
      <div className="pabs circle lightblue s100 scale50 t10">
        <div className="s75 blue">
          <div className="s50 lightblue">
            <div className="s25 blue"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TopShapes;
