import { useRef, useEffect, useContext } from "react";

import InputWrapper from "../UI/InputWrapper/InputWrapper";
import Card from "../UI/Card/Card";
import Row from "../UI/Row/Row";
import StatusStateContext from "../../store/status-state-context";

import "./StatusStateParser.css";

const StatusStateParser = (props) => {
  // const [statusState, setStatusState] = useState(0);

  const ssCtx = useContext(StatusStateContext);

  const statusStateRefs = [
    {
      label: "alarm_none",
      ref: useRef(null),
      val: 0,
      type: "radio",
      name: "alarm_type",
    },
    {
      label: "lds_leak",
      ref: useRef(null),
      val: 1,
      type: "radio",
      name: "alarm_type",
    },
    {
      label: "partial",
      ref: useRef(null),
      val: 2,
      type: "radio",
      name: "alarm_type",
    },
    {
      label: "panel_pold",
      ref: useRef(null),
      val: 3,
      type: "radio",
      name: "alarm_type",
    },
    {
      label: "ext_pold",
      ref: useRef(null),
      val: 4,
      type: "radio",
      name: "alarm_type",
    },
    {
      label: "low_bat",
      ref: useRef(null),
      val: 5,
      type: "radio",
      name: "alarm_type",
    },
    {
      label: "remote_panel",
      ref: useRef(null),
      val: 6,
      type: "radio",
      name: "alarm_type",
    },
    {
      label: "unused",
      ref: useRef(null),
      val: 7,
      type: "radio",
      name: "alarm_type",
    },
    { label: "in_alarm", ref: useRef(null), val: 8, type: "checkbox" },
    { label: "flow_in_partial", ref: useRef(null), val: 16, type: "checkbox" },
    { label: "flow_trip", ref: useRef(null), val: 32, type: "checkbox" },
    { label: "is_moving", ref: useRef(null), val: 64, type: "checkbox" },
    { label: "valve_open", ref: useRef(null), val: 128, type: "checkbox" },
    { label: "b0_api_trigger", ref: useRef(null), val: 256, type: "checkbox" },
    { label: "too_cold", ref: useRef(null), val: 512, type: "checkbox" },
    { label: "chan_sel_away", ref: useRef(null), val: 1024, type: "checkbox" },
    { label: "chan_mod", ref: useRef(null), val: 2048, type: "checkbox" },
    { label: "override", ref: useRef(null), val: 4096, type: "checkbox" },
    { label: "alarm_push", ref: useRef(null), val: 8192, type: "checkbox" },
    { label: "standby", ref: useRef(null), val: 16384, type: "checkbox" },
    { label: "shutdown", ref: useRef(null), val: 32768, type: "checkbox" },
  ];

  const statusStateInput = useRef(null);

  const calcStatusState = () => {
    let newStatusState = 0;

    statusStateRefs.forEach((el) => {
      const refObj = el.ref.current;
      if (refObj.checked) newStatusState += el.val;
    });

    ssCtx.onChange(newStatusState);
  };

  const updateCheckboxes = () => {
    const statusStateInputVal = parseInt(statusStateInput.current.value) || 0;

    statusStateRefs.forEach((el) => {
      const statusStateFlagDec = el.val,
        inputRef = el.ref;

      if (statusStateFlagDec > 7) {
        inputRef.current.checked =
          (statusStateFlagDec & statusStateInputVal) === statusStateFlagDec;
      } else {
        inputRef.current.checked =
          (7 & statusStateInputVal) === statusStateFlagDec;
      }
    });

    ssCtx.onChange(statusStateInputVal);
  };

  // Check first radio when component mounts
  useEffect(() => {
    statusStateRefs[0].ref.current.checked = true;
  }, []);

  return (
    <Card>
      <h2>Status State Builder:</h2>
      <Row>
        <label htmlFor="status-state" className="label">
          Status State
        </label>
        <input
          type="number"
          name="status-state"
          ref={statusStateInput}
          value={ssCtx.value}
          onChange={updateCheckboxes}
          max="65535"
          min="0"
          val={ssCtx.value}
          onFocus={(e) => e.currentTarget.select()}
        />
      </Row>

      {statusStateRefs.map((el, ind) => (
        <InputWrapper
          label={el.label}
          key={el.label}
          decimalValue={el.val}
          name={el.name || ""}
        >
          <input
            type={el.type}
            name={el.name}
            ref={el.ref}
            value={props.val || ""}
            onChange={calcStatusState}
          />
        </InputWrapper>
      ))}
    </Card>
  );
};
export default StatusStateParser;
