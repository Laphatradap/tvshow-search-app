import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ShowListContainer from "./components/ShowList";
import ShowContainer from "./components/ShowContainer";
import EpisodeDetailContainer from "./components/EpisodeDetailContainer";
import Header from "./components/Header"

import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Route exact path="/" component={ShowListContainer} />
        <Route exact path="/show/:id" component={ShowContainer} />
        <Route exact path="/episode/:id" component={EpisodeDetailContainer} />
      </Router>
    </div>
  );
}

export default App;
