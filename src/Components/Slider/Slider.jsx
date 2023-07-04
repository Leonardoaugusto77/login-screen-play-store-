export default function Slider({ RequestApi }) {
  return (
    <>
      <div className="slider_section">
        {RequestApi.map((item, index) => (
          <div className="slider_item" key={index}>
            <img src={item.src} alt="Imagens dos jogos" />
          </div>
        ))}
      </div>
    </>
  );
}
