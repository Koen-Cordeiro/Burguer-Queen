import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import Login from '../src/Pages/login'
import Register from '../src/Pages/register'
import Page404 from '../src/Pages/404'

render(
    <BrowserRouter> 
    <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/register" component={Register} />
            <Route path='*' component={Page404} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'))