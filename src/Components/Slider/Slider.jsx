import { useState } from "react";

export default function Slider({ RequestApi }) {
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

  return (
    <div className="slider_section">
      <div className="slider_item">
        <img
          src={RequestApi[currentImageIndex].src}
          alt={RequestApi[currentImageIndex].name}
        />
        <h3>{RequestApi[currentImageIndex].name}</h3>
      </div>
      <div className="slider_buttons">
        <button onClick={handlePrevious}>Voltar</button>
        <button onClick={handleNext}>Próximo</button>
      </div>
    </div>
  );
}
