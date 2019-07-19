import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Default from './components/Default';
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
        <NavigationBar/>

        <Switch>
            <Route exact path="/" component={ProductList}/>
            <Route exact path="/details" component={ProductDetail}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact component={Default}/>
        </Switch>

    </>
  );
}

export default App;
