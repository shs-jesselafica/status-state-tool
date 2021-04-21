import { forwardRef } from "react";

import Row from "./ui/Row";
import "./CheckboxInput.css";

const CheckboxInput = (props, ref) => {
  const clickCheckboxHandler = () => {
    props.isClicked();
  };

  return (
    <Row>
      <span className="decimal-value">
        {props.label}
        &nbsp;({props.decimalValue})
      </span>
      <input type="checkbox" ref={ref} onClick={clickCheckboxHandler} />
    </Row>
  );
};

export default forwardRef(CheckboxInput);
