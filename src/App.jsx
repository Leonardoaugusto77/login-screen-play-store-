import GamesApi from "./GamesApi.json";
import Form from "./Components/Form";
import Slider from "./Components/Slider";

export default function App() {
  return (
    <>
      <div className="container_main">
        <Form />
        <Slider RequestApi={GamesApi} />
      </div>
    </>
  );
}
