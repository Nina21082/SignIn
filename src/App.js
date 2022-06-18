import './App.css';
import { LogIn } from './LogIn';
import { Routes, Route} from "react-router-dom";
import { SignUp } from './SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
