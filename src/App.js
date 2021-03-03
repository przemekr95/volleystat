import './App.css';
import Description from './components/description/Description';
import Scoreboard from './components/scoreboard/Scoreboard';

function App() {
  return (
    <div className="wrapper">
      <Scoreboard/>
      <Description/>
    </div>
  );
}

export default App;
