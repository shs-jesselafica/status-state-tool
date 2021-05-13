import { useState, createContext } from "react";

const StatusStateContext = createContext({
  value: 0,
  onChange: () => {},
});

export const StatusStateContextProvider = (props) => {
  const [statusState, setStatusState] = useState(0);

  const onChangeHandler = (newStatusState) => {
    setStatusState(newStatusState);
  };

  return (
    <StatusStateContext.Provider
      value={{
        value: statusState,
        onChange: onChangeHandler,
      }}
    >
      {props.children}
    </StatusStateContext.Provider>
  );
};

export default StatusStateContext;
