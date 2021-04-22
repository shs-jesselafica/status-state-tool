import { forwardRef } from "react";

import Row from "./Row";
import "./Input.css";
import utilities from "./Utilities.module.css";

const Input = (props, ref) => {
  const onChangeHandler = () => {
    props.isChanged();
  };

  return (
    <Row>
      <label className="label">
        {props.label}
        <span className={utilities.d_none}>({props.decimalValue})</span>
      </label>
      <input
        type={props.type}
        name={props.name}
        ref={ref}
        value={props.val || ''}
        onChange={onChangeHandler}
      />
    </Row>
  );
};

export default forwardRef(Input);
