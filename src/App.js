import React from 'react'
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import NewPlaces from './places/pages/NewPlaces';
import UsersPlaces from './places/pages/UsersPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';


const App = ()=>{
  return(
    <Router>
    <MainNavigation/>
    <main>
      <Switch>
        <Route path="/" exact component={Users}></Route>
        <Route path='/:userId/places' exact component={UsersPlaces}></Route>
        <Route path="/places/new" exact component={NewPlaces}></Route>
        <Redirect to="/"/>
      </Switch>
      </main>
    </Router>
  )
};

export default App;
