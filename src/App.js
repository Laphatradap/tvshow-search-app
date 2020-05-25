import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShowContainer from "./components/ShowContainer";
import EpisodeDetailContainer from "./components/EpisodeDetailContainer";
import NavBar from "./components/NavBar";
import SearchBox from "./components/SearchBox"

import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={SearchBox} />
        <Route exact path="/show/:id" component={ShowContainer} />
        <Route exact path="/episode/:id" component={EpisodeDetailContainer} />
      </Router>
    </div>
  );
}

export default App;
