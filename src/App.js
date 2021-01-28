import "./App.css";
import Header from "./components/Header";
import Score from "./components/Score";
import GameSnake from "./components/GameSnake";
import Instruction from "./components/Instruction";

function App() {
  return (
    //debo crear un componente por cada elemento html(como puedo solucionar esta cuestion)
    <div className="container">
      <Header message="Learn to use Vim by playing Snake" />
      <Score />
      <GameSnake />
      <Instruction />
    </div>
  );
}

export default App;
