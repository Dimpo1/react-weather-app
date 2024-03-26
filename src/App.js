import React from "react";
import Header from "./Header";
import Main from "./Main";
import Appfooter from "./Appfooter";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App Container">
      <Header />
      <Main />
      <Appfooter />
    </div>
  );
}

export default App;
