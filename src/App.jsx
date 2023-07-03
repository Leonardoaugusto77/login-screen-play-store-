import GamesApi from "./GamesApi.json";
import Form from "./Components/Form";

export default function App() {
  const games = GamesApi;

  return (
    <>
      <div className="container_main">
        <Form />

        <div className="slider_section">
          {games.map((item, index) => (
            <div className="slider_item" key={index}>
              <img src={item.src} alt="Imagens dos jogos" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
