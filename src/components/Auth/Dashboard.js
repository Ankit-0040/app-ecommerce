import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import About from '../common/About';
import NavBar from '../common/NavBar';
import Home from '../common/Home';
import WishList from '../common/WhishList';
import Cart from '../common/Cart';
import LoginPage from './LoginPage';
import AuthProvider from '../../context/AuthProvider';
import ProductPage from '../common/ProductPage';

function Dashboard() {
  return (
    <Router>
      <AuthProvider>
        <MainContent />
      </AuthProvider>
    </Router>
  );
}

function MainContent() {
  const history = useHistory();

  useEffect(() => {
    const handlePopstate = () => {
      // const currentPath = window.location.pathname;
      // console.log(currentPath);
      history.push('/');
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [history]);

  return (
    <div>
      <NavBar title="Shopping Cart" aboutText="About" />
      <div>
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
          <Route exact path="/productdetails/:id">
            <ProductPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
