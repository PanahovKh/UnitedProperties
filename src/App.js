import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LeftPage from './leftSidePage/LeftPage'
import ContactDetails from './pages/ContactDetails'
import InvestmentPlans from './pages/InvestmentPlans'
import InvestmentPreferences from './pages/InvestmentPreferences'

function App() {
  return (
    <Router >
      <div className='main_page'>
        <LeftPage />
        <Switch>
          <Route exact path='/'>
            <ContactDetails />
          </Route>
          <Route path='/plans'>
            <InvestmentPlans />
          </Route>
          <Route path='/preferences'>
            <InvestmentPreferences />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
