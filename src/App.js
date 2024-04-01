import React from "react";
import Header from "./Header";
import Appfooter from "./Appfooter";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App Container">
      <Header defaultCity={"Paris"} />
      <Appfooter />
    </div>
  );
}

export default App;
