import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "views/main";
import Room from "views/room";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/room/:id" component={Room} />
      </Switch>
    </Router>
  );
}

export default App;
