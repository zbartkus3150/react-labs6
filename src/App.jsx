import React from 'react'
import Employees from './Data'
import PageEmployee from './PageEmployee'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/">
            <Employees/>
        </Route>
        <Route exact path="/new">
            <PageEmployee/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App