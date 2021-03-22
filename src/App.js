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
import Home from './Components/Home/Home';

export const UserContext = createContext();

function App() {
  const [loggedinUser, setLoggedinUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedinUser,setLoggedinUser]}>
    <Router>
    <Header></Header>
      <Switch>
         <Route exact path="/">
            <Home></Home>
         </Route>
         <Route path="/home">
          <Home></Home>
         </Route>
         <Route path="/login">
            <Login />
         </Route>
         <PrivateRoute path="/destination">
            <Destination />
         </PrivateRoute>
         <PrivateRoute path="/destination/bk1">
            <Destination></Destination>
          </PrivateRoute>
          <PrivateRoute path="/destination/:key">
            <Destination></Destination>
          </PrivateRoute>
       </Switch>
       </Router>
      </UserContext.Provider>
  );
}

export default App;
