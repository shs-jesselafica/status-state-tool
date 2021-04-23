import Row from "./Row";
import "./InputWrapper.css";
import utilities from "./Utilities.module.css";

const Input = (props) => {

  return (
    <Row>
      <label className="label">
        {props.label}
        <span className={utilities.d_none}>({props.decimalValue})</span>
      </label>
      {props.children}
    </Row>
  );
};

export default Input;
