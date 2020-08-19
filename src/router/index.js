import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import App from '../Components/app';
import Search from '../Components/search';
import Complete from '../Components/complete';



const BaseRouter = () =>(
    <HashRouter>
        <Switch>
            <Route exact path='/'  component={App}></Route>
            <Route exact path='/search' component={Search}></Route>
            <Route exact path='/complete' component={Complete}></Route>
        </Switch>
    </HashRouter>
);

export default BaseRouter;