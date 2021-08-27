import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/home";
import Login from "./Components/Login/login";

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { Login }  path="/"/>
            <Route component = { Home }  path="/home" exact />
        </BrowserRouter>
    )
 }
 
 export default Routes;