import React from 'react'
import {Route,Switch } from 'react-router-dom'
import Home from './core/Home';
import Menu from './core/Menu';
import Welcomescreen from './User/Welcomescreen';
import Signin from './User/Signin';
import Orgsignin from './User/Orgsignin';
import Membersignup from './User/Individualsignup';
import Organizationsignup from './User/Organizationsignup';


const MainRouter = () =>(
    <div>
        <Menu/> 
        
       
        <Switch>
        <Route exact path="/" component={Home}>
        </Route>
        <div className="outer">     <div className="inner">
        <Route exact path="/welcome" component={Welcomescreen}>
        </Route>
        <Route exact path="/signin" component={Signin}>
        </Route>
        <Route exact path="/orgsignin" component={Orgsignin}>
        </Route>
        <Route exact path="/membersignup" component={Membersignup}>
        </Route>
        <Route exact path="/organizationsignup" component={Organizationsignup}>
        </Route>
        </div></div>            
        </Switch>
            
    </div>
)

export default MainRouter;