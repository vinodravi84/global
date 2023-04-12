import React from "react"
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import About from "./component/About"
import Skills from "./component/Skills"
import Quiz from "./component/Quiz"
import Services from "./component/Services"
import Result from "./component/Result"

import Start from "./component/Start"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//npm install react-router-dom@5

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' component={Home} exact>
            <Home />
          </Route>
          <Route path='/about' component={About} exact>
            <About />
          </Route>
          <Route path='/skills' component={Skills} exact>
            <Skills />
          </Route>
          <Route path='/quiz' component={Quiz} exact>
            <Quiz />
          </Route>
          <Route path='/services' component={Services} exact>
            <Services />
          </Route>
          <Route path='/result' component={Result} exact>
          
            <Result />
          </Route>

          <Route path='/start'component={Start} exact>
            <Start  />
          </Route>

        </Switch>
      </Router>
    </>
  )
}

export default App
