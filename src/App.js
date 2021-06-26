import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
 
} from "react-router-dom";
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import About from './Components/About/About';
import Delete from './Components/Delete/Delete';
import Login from './Components/LoginManager/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import PrivateRoute from './Components/LoginManager/PrivateRoute/PrivateRoute';
import SingleBlogDetalis from './Components/RecentPost/SingleBlogDetalis';
import Register from './Components/Register/Register';


 export const UserContext = createContext();
function App() {
  const [loggedInUser ,setLoggedInUser] = useState({});

  
 
  return (
    <div className="App">

    <UserContext.Provider value={[loggedInUser ,setLoggedInUser]}>
          <Router>
            <Switch>
              <Route  exact path="/">
                <Home />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/makeAdmin">
                <MakeAdmin />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/delete">
                <Delete />
              </Route>
              <Route path="/post/:id">
                <SingleBlogDetalis/>
              </Route>
            </Switch>
        </Router>

        </UserContext.Provider>

    </div>
  );
}

export default App;
