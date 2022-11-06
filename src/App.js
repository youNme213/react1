import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Slider from "./components/section/Slider";
import Image from "./components/section/Image";
import ImageText from "./components/section/ImageText";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Image />
      <ImageText />
      <Card />
      <Banner />
      <Text />
      <Footer />
    </>
  );
}

export default App;
