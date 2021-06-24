import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </Router>



    </div>
  );
}

export default App;
