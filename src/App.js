import React from "react";
import './App.css';
import About from './components/common/About';
import NavBar from './components/common/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/common/Home";
import WhishList from "./components/common/WhishList";
import Cart from "./components/common/Cart";


function App() {
  return (
    <Router>
      <div>
        <NavBar title="Shopping Cart" aboutText="About Us" />
        <div className="container my-3">
          <Switch>
            <Router exact path="/WishList">
              <WhishList />
            </Router>
            <Route exact path="/About"> 
            <About/>
            </Route>
            <Route exact path="/"> 
            <Home/>
            </Route>
            <Route exact path="/Cart"> 
            <Cart/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
