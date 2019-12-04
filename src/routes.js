import "./assets/styles.css";

import { Route, Router, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import React from "react";
import history from "./history";

const Routes = () => {
  return (
    <div className='container'>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/product/:id' exact component={Product} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
export default Routes;
