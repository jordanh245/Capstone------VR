
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarInfo from './components/NavbarInfo';

import Home from "./components/Home"
import Cart from "./components/Cart"
import Contact from "./components/Contact"
import Products from "./components/Product"
import Error from "./components/Error";
// import brand from "../assets/vr-glasses2.png"
import Register from "./components/Register";
import Login from "./components/Login";
import Account from "./components/Account";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarInfo>
        <Switch>
          
         
          
          <Route exact path = "/" component ={Home}/>
         
          <Route exact path = "/cart" component ={Cart}/>
          <Route exact path = "/contact" component ={Contact}/>
          <Route exact path = "/products" component ={Products}/>
          <Route exact path = "/register" component ={Register}/>
          <Route exact path = "/login" component ={Login}/>
          <Route exact path = "/account" component ={Account}/> 
          <Route  path="*" component ={Error}/>
        </Switch>
        </NavbarInfo>
      </BrowserRouter>
    </div>
  );
}

export default App;
