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
            <PageEmployee/>
        </Route>
        <Route exact path="/new">
            <div>Test</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App