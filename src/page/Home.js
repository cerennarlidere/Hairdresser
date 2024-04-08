import Slider from "../components/Slider/Slider";
import React, { components } from "react";
import Footer from "../components/Footer";
import { FooterLink } from "../components/FooterStyles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import FooterIcon from "../components/footerIcon";
library.add(fab);
function Home() {
  return (
    <div>
      <Slider />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
      <FooterLink />
      <FooterIcon />

      <section />
    </div>
  );
}

export default Home;
