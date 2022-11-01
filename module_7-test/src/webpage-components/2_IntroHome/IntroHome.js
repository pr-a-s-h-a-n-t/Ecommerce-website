import React from "react";
import "./IntroHome.css";
import IntroHomeText from "./components/IntroHomeText";
import IntroHomeImage from "./components/IntroHomeImage";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <IntroHomeText />
        <IntroHomeImage />
      </div>
    </>
  );
}