import { useState } from "react";

import StatusStateParser from "./components/StatusStateParser/StatusStateParser";
import AdditionalWebFields from "./components/AdditionalWebFields/AdditionalWebFields";

import logo from "./assets/lds-logo-white.png";
import classes from "./App.module.css";
import "./App.css";

const App = () => {

  return (
    <div className={classes.wrapper}>
      <img src={logo} alt="" className={classes.header_logo} />
      <div className={classes.component_wrapper}>
        <StatusStateParser />
        <AdditionalWebFields />
      </div>
    </div>
  );
};

export default App;
