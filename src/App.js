
import './App.css';
import { Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Todo} from "./pages/Todo/Todo"
import { Pomodoro } from './pages/Pomodoro/Pomodoro';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/pomodoro" element={<Pomodoro/>}/>
      </Routes>
    </div>
  );
}

export default App;
