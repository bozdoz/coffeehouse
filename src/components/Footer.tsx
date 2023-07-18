import BannerShapes from "./shapes/BannerShapes";
import BottomShapes from "./shapes/BottomShapes";

const Footer = () => (
  <footer>
    <BottomShapes side="left" />
    <BottomShapes side="right" />
    <BannerShapes />
  </footer>
);

export default Footer;
