import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login';
import { Main } from './Components/Main';
import { MainRoute } from './Components/Routes';


function App() {
  return (
    <div className="App">
      <MainRoute />
    </div>
  );
}

export default App;
