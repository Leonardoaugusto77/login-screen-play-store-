import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Slider({ RequestApi }) {
  const arrowIconsStyled = {
    display: "flex",
    justifyContent: "center",
    color: "#fff",
    margin: "auto",
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1) % RequestApi.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevious = () => {
    const previousIndex =
      (currentImageIndex - 1 + RequestApi.length) % RequestApi.length;
    setCurrentImageIndex(previousIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % RequestApi.length;
      setCurrentImageIndex(nextIndex);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex, RequestApi.length]);

  return (
    <div className="slider_section">
      <div className="slider_item">
        <img
          src={RequestApi[currentImageIndex].src}
          alt={RequestApi[currentImageIndex].name}
        />

        <div className="slider_buttons">
          <div className="title_game">
            <h3>{RequestApi[currentImageIndex].name}</h3>
            <p>{RequestApi[currentImageIndex].year} </p>
          </div>
          <div className="action_button_slider">
            <button onClick={handlePrevious} className="buttons_slider_action">
              <FiChevronLeft size={30} style={arrowIconsStyled} />
            </button>
            <button onClick={handleNext} className="buttons_slider_action">
              <FiChevronRight size={30} style={arrowIconsStyled} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
