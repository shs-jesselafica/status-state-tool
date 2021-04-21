import { useState, useRef } from "react";

import CheckboxInput from "./CheckboxInput";
import RadioInput from "./RadioInput";
import Row from "./ui/Row";

const StatusState = (props) => {
  const [statusState, setStatusState] = useState(0);

  const statusStateRefs = [
    { label: "alarmNone", ref: useRef(null), val: 0 },
    { label: "ldsLeak", ref: useRef(null), val: 1 },
    { label: "partial", ref: useRef(null), val: 2 },
    { label: "panel_pold", ref: useRef(null), val: 3 },
    { label: "ext_pold", ref: useRef(null), val: 4 },
    { label: "low_bat", ref: useRef(null), val: 5 },
    { label: "remote_panel", ref: useRef(null), val: 6 },
    { label: "unused", ref: useRef(null), val: 7 },
    { label: "in_alarm", ref: useRef(null), val: 8 },
    { label: "flow_in_partial", ref: useRef(null), val: 16 },
    { label: "flow_trip", ref: useRef(null), val: 32 },
    { label: "is_moving", ref: useRef(null), val: 64 },
    { label: "valve_open", ref: useRef(null), val: 128 },
    { label: "b0_api_trigger", ref: useRef(null), val: 256 },
    { label: "too_cold", ref: useRef(null), val: 512 },
    { label: "chan_sel_away", ref: useRef(null), val: 1024 },
    { label: "chan_mod", ref: useRef(null), val: 2048 },
    { label: "override", ref: useRef(null), val: 4096 },
    { label: "alarm_push", ref: useRef(null), val: 8192 },
    { label: "standby", ref: useRef(null), val: 16384 },
    { label: "shutdown", ref: useRef(null), val: 32768 },
  ];

  const statusStateInput = useRef(null);

  const calcStatusState = () => {
    let newStatusState = 0;

    statusStateRefs.forEach((el) => {
      const refObj = el.ref.current;
      if (refObj.checked) newStatusState += el.val;
    });

    setStatusState(newStatusState);
  };

  const updateCheckboxes = () => {
    const statusStateInputVal = parseInt(statusStateInput.current.value) || 0;

    statusStateRefs.forEach((el) => {
      const statusStateFlagDec = el.val,
        checkboxRef = el.ref;

      if (statusStateFlagDec > 7) {
        checkboxRef.current.checked =
          (statusStateFlagDec & statusStateInputVal) === statusStateFlagDec;
      } else {
        checkboxRef.current.checked =
          (7 & statusStateInputVal) === statusStateFlagDec;
      }
    });
    setStatusState(statusStateInputVal);
  };

  return (
    <div>
      <Row>
        <pre>
          Current Status State:
          <input
            type="number"
            ref={statusStateInput}
            value={statusState}
            onChange={updateCheckboxes}
          />
        </pre>
      </Row>

      {statusStateRefs.map((el) =>
        el.val > 7 ? (
          <CheckboxInput
            label={el.label}
            key={el.label}
            decimalValue={el.val}
            isClicked={calcStatusState}
            ref={el.ref}
          />
        ) : (
          <RadioInput
            label={el.label}
            key={el.label}
            decimalValue={el.val}
            isClicked={calcStatusState}
            ref={el.ref}
          />
        )
      )}
    </div>
  );
};
export default StatusState;
