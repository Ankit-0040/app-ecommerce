import About from '../common/About';
import NavBar from '../common/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../common/Home";
import WishList from "../common/WhishList";
import Cart from "../common/Cart";
import LoginPage from "./LoginPage";
import  AuthProvider  from "../../context/AuthProvider";

function Dashboard() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <NavBar title="Shopping Cart" aboutText="About Us" />
          <div className="container my-3">
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/wishlist">
                <WishList />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
            </Switch>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default Dashboard;
