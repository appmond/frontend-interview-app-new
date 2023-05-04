import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Buyflow } from './buyflow'
import { PRODUCT_IDS_TO_NAMES } from './config/constants'
import { useAppSelector } from './state/hooks'

const App = () => {
  const { selectedProduct } = useAppSelector((state) => state.buyflowReducer)

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_des" component={Buyflow} />
          <Route path="/">
            <p>Welcome to Getsafe's {PRODUCT_IDS_TO_NAMES[selectedProduct]}</p>
            <Link to="/buy/insurance_des">Get started!</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
