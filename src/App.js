import logo from './logo.svg';
import './App.css';
import { Mainpage } from './components/Mainpage';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="App">

<AnimatedCursor

innerSize={10}
      outerSize={30}
      color='40, 192, 246'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      
/>
     <Mainpage/>
    </div>
  );
}

export default App;
