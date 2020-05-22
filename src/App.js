import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShowContainer from "./components/ShowContainer";
import EpisodeDetailContainer from "./components/EpisodeDetailContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ShowContainer} />
        <Route exact path="/episode/:id" component={EpisodeDetailContainer} />
      </Router>
    </div>
  );
}

export default App;
