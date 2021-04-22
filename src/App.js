import { useState } from "react";

import StatusStateParser from "./components/StatusStateParser";
import AdditionalWebFields from "./components/AdditionalWebFields";
import SamplePostBody from "./components/SamplePostBody";

import logo from "./assets/lds-logo-white.png";
import classes from "./App.module.css";
import "./App.css";

const App = () => {
  const [statusState, setStatusState] = useState(0);
  const [webData, setWebData] = useState({
    id: "987654321",
    key: "007E307160BCB021BBA",
    trip_time: "20",
    cur_val: "0",
    trip_val: "10",
  });

  const statusStateChangeHandler = (statusState) => {
    setStatusState(statusState);
  };

  const webDataChangeHandler = (webData) => {
    setWebData({
      ...webData,
    });
  };

  return (
    <div className={classes.wrapper}>
      <img src={logo} alt="" className={classes.header_logo} />
      <div className={classes.component_wrapper}>
        <StatusStateParser onStatusStateChange={statusStateChangeHandler} />
        <AdditionalWebFields onWebDataChange={webDataChangeHandler} />
        <SamplePostBody statusState={statusState} webData={webData} />
      </div>
    </div>
  );
};

export default App;
