import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShowContainer from "./components/ShowContainer";
import EpisodeContainer from "./components/EpisodeContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/shows/:id" component={EpisodeContainer} />
        <Route path="/" component={ShowContainer} />
      </Router>
    </div>
  );
}

export default App;
