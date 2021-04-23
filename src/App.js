import { useState } from "react";

import StatusStateParser from "./components/StatusStateParser";
import AdditionalWebFields from "./components/AdditionalWebFields";

import logo from "./assets/lds-logo-white.png";
import classes from "./App.module.css";
import "./App.css";

const App = () => {
  const [statusState, setStatusState] = useState(0);

  const statusStateChangeHandler = (statusState) => {
    setStatusState(statusState);
  };

  return (
    <div className={classes.wrapper}>
      <img src={logo} alt="" className={classes.header_logo} />
      <div className={classes.component_wrapper}>
        <StatusStateParser onStatusStateChange={statusStateChangeHandler} />
        <AdditionalWebFields statusState={statusState} />
      </div>
    </div>
  );
};

export default App;
