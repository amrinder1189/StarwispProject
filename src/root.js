import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Menu from './components/menubar'
import App from "./App";
import Setting from './components/Setting'
import Post from './components/Post'

function Root(){
    return(
        <Router>
            <div className='root'>
                <Menu/>
                <Switch>
                    <Route path='/' exact component={App} />
                    <Route path='/post' exact component={Post} />
                    <Route path='/setting' exact component={Setting} />
                </Switch>
            </div>
        </Router>

    )
}
export default Root;