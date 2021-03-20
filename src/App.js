import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/LoginPage/Login';
import Header from './Components/Home/Header';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Destination from './Components/Destination/Destination';

export const userContext = createContext();

function App() {
  const [loggedinUser, setLoggedinUser] = useState({});
  return (
    <userContext.Provider value = {[loggedinUser,setLoggedinUser]}>
    <p>name: {loggedinUser.name}</p>
    <Header></Header>
    <Router>
      <Switch>
      {/* <Route path="/home">
            <home />
          </Route> */}
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/destination">
            <Destination />
          </PrivateRoute>
           {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> 
       */}
       </Switch>
       </Router>
      </userContext.Provider>
  );
}

export default App;
