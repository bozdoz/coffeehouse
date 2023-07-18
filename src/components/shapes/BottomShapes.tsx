const BottomShapes = ({ side = "left" }: { side: "left" | "right" }) => (
  <div className={`pabs ${side}-side`}>
    <div className="pabs left-bushes bushes">
      <div className="scale75 circle green s100">
        <div className="dark-green s80">
          <div className="green s60">
            <div className="dark-green s40"></div>
          </div>
        </div>
      </div>
      <div className="circle green s100 scale50">
        <div className="dark-green s80">
          <div className="green s60">
            <div className="dark-green s40"></div>
          </div>
        </div>
      </div>
      <div className="circle green s100 scale50">
        <div className="dark-green s80">
          <div className="green s60">
            <div className="dark-green s40"></div>
          </div>
        </div>
      </div>
      <div className="scale75 circle green s100">
        <div className="dark-green s80">
          <div className="green s60">
            <div className="dark-green s40"></div>
          </div>
        </div>
      </div>
      <div className="circle green s100 scale30">
        <div className="dark-green s80">
          <div className="green s60">
            <div className="dark-green s40"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="pabs circle orange s100 left-orange">
      <div className="s80 light-orange">
        <div className="s60 orange">
          <div className="s40 light-orange">
            <div className="s20 orange"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="pabs scale50 diamond blue s100 left-diamond">
      <div className="lightblue s75">
        <div className="blue s50">
          <div className="lightblue s25"></div>
        </div>
      </div>
    </div>
  </div>
);

export default BottomShapes;
