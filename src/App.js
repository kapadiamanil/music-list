import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HOME_ROUTE, MUSIC_LIST_ROUTE } from "./helper/constants";

import Home from "./pages/home";
import MusicList from "./pages/music-list";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Routes for landing/home page and music list page */}
        <Route exact path={HOME_ROUTE} component={Home} />
        <Route exact path={MUSIC_LIST_ROUTE} component={MusicList} />
      </Switch>
    </Router>
  );
};

export default App;
