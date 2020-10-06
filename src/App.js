import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import SingleEvent from './component/SingleEvent/SingleEvent';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import Admin from './component/Admin/Admin';
import Event from './component/Event/Event';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import TotalEvent from './component/TotalEvent/TotalEvent';


export const EventContext = createContext();


function App() {
  const [eventdetails, setEventdetails] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});


  return (
    <EventContext.Provider value={[loggedInUser, setLoggedInUser, eventdetails, setEventdetails]}>

    <p>app user name: {loggedInUser.email}</p>



      <Router className="App">
      <Switch>
      
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/about">
        <About></About>
      </Route>
      <PrivateRoute exact path="/detailsEvent">
        <SingleEvent></SingleEvent>
      </PrivateRoute>
      <Route exact path="/register">
        <Register></Register>
      </Route>
      <Route exact path="/login">
        <Login></Login>
      </Route>
      <Route exact path="/admin">
        <Admin></Admin>
      </Route>
      <Route exact path="/totalEventPerUser">
        <TotalEvent></TotalEvent>
      </Route>

      </Switch>
      
    </Router>
    </EventContext.Provider>
    
  );
}

export default App;
