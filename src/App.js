import './App.css';
import './components/Eyebrow'
import Eyebrow from './components/Eyebrow';
import Game from './components/Game';


function App() {
  return (
    <div className="App">
      <Eyebrow />
      <h1>Welcome to the Sports-Game!</h1>
    <div>
      <Game/>
    </div>
    </div>
  );
}

export default App;
