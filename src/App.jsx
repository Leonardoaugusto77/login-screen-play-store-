import { useState } from "react";
import Form from "./Components/Form";
import Slider from "./Components/Slider";
import GamesApi from "./GamesApi.json";

export default function App() {
  const [isSliderVisible, setSliderVisible] = useState(true);

  const toggleSlider = () => {
    setSliderVisible(!isSliderVisible);
  };

  return (
    <>
      <div className="container_main">
        <Form toggleSlider={toggleSlider} />
        {isSliderVisible && <Slider RequestApi={GamesApi} />}
      </div>
    </>
  );
}
