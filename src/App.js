import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from './pages/Home'
import Model from './pages/Model'

import Header from './components/Header'

import './App.scss'

function App() {
  const location = useLocation()

  const imageDetails = {
    width: 524,
    height: 650,
  }

  return (
    <>
      <Header />
      {/* <Route
        render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path='/'
                render={() => <Home imageDetails={imageDetails} />}
              />
              <Route
                exact
                path='/model/:id'
                render={() => <Model imageDetails={imageDetails} />}
              />
            </Switch>
          </AnimatePresence>
        )}
      /> */}

      
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" render={() => <Home imageDetails={imageDetails} /> } />
          <Route path="/model/:id" render={() => <Model imageDetails={imageDetails} /> } />
        </Switch> 
      </AnimatePresence>     
    </>
  )
}

export default App