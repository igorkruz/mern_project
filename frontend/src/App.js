import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import NewPlace from "./places/pages/NewPlace";
import Users from "./users/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path={"/"} exact>
            <Users />
          </Route>
          <Route path={"/:userId/place"} exact>
            <UserPlaces />
          </Route>
          <Route path={"/place/new"}>
            <NewPlace />
          </Route>
          <Redirect to={"/"} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
