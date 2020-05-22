import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShowContainer from "./components/ShowContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ShowContainer} />
      </Router>
    </div>
  );
}

export default App;
