import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Iphone11 from "./composent/Iphone11";
import Iphone11promax from "./composent/Iphone11promax";
import Iphone12 from "./composent/iphone12";
import Iphone12promax from "./composent/iphone12promax";
import Iphone13 from "./composent/iphone13";
import Iphone13promax from "./composent/iphone13promax";
import HomePage from './HomePage';
import Com11 from './Commande/Com11';
import Com11promax from './Commande/Com11promax';
import Com12 from './Commande/Com12';
import Com12promax from './Commande/Com12promax';
import Com13 from './Commande/Com13';
import Com13promax from './Commande/Com13promax';
import Felicitation from './felicitation/felicitation';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>

    <Routes>
    
        <Route path="/"  element={<HomePage/>} component={HomePage} exact />
        <Route path="/iphone11"  element={<Iphone11/>} component={Iphone11} exact />
        <Route path="/iphone11promax"  element={<Iphone11promax/>} component={Iphone11promax} exact/>
        <Route path="/iphone12"  element={<Iphone12/>} component={Iphone12} exact/>
        <Route path="/iphone12promax" element={<Iphone12promax/>} component={Iphone12promax} exact/>
        <Route path="/iphone13"  element={<Iphone13/>} component={Iphone13} exact/>
        <Route path="/iphone13promax"  element={<Iphone13promax/>} component={Iphone13promax} exact/>
        <Route path="/Com11"  element={<Com11/>} component={Com11} exact/>
        <Route path="/Com11promax"  element={<Com11promax/>} component={Com11promax} exact/>
        <Route path="/Com12"  element={<Com12/>} component={Com12} exact/>
        <Route path="/Com12promax"  element={<Com12promax/>} component={Com12promax} exact/>
        <Route path="/Com13"  element={<Com13/>} component={Com13} exact/>
        <Route path="/Com13promax"  element={<Com13promax/>} component={Com13promax} exact/>
        <Route path="/Felicitation"  element={<Felicitation/>} component={Felicitation} exact/>

    </Routes>

</BrowserRouter>);