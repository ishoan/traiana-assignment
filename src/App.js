import React from "react";
import {Route, Switch, Router} from 'react-router-dom';
import history from './history';
import './Style.css';
import {setNavigation, goBack} from './services/navigationService';
import Header from './components/common/Header';
import GreetingsPage from './components/screens/GreetingsPage';
import IngredientsPage from './components/screens/IngredientsPage';
import CheckoutPage from './components/screens/CheckoutPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    setNavigation(history);
  }

  render() {
    return (
        <div className="app-wrapper">
          <Header
              onClick={() => goBack()}
          />
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={GreetingsPage}/>
              <Route path="/IngredientsPage" exact component={IngredientsPage}/>
              <Route path="/CheckoutPage" exact component={CheckoutPage}/>
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
