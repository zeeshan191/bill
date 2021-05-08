import React from "react";
import Navbar from './Components/Navbar/Navbar'
import {  Route, Switch} from 'react-router-dom'
import BillingForm from './BillingForm';
import Product from './Components/Product/Product'
import Customer from './Components/Customer/Customer'
import './App.css'

function App() {
    
    return (
        <div className="App">
        <Navbar />

<Switch>

<Route path ="/customer" component ={Customer} />
<Route path ="/product" component ={Product} />
<Route path ="/BillingForm" component ={BillingForm} />
</Switch>     
     </div>

    );
}

export default App;
