import { useState, useRef } from "react";
import Card from "./ui/Card";
import Input from "./ui/Input";

import "./AdditionalWebFields.css";

const AdditionalWebFields = (props) => {
  const [webData, setWebData] = useState({
    id: "987654321",
    key: "007E307160BCB021BBA",
    trip_time: "20",
    cur_val: "0",
    trip_val: "10",
  });
  const idRef = useRef(null),
    keyRef = useRef(null),
    tripTimeRef = useRef(null),
    curValRef = useRef(null),
    tripRateRef = useRef(null);

  const onChangeHandler = () => {
    const inputDataObj = {
      id: idRef.current.value,
      key: keyRef.current.value,
      trip_time: tripTimeRef.current.value,
      cur_val: curValRef.current.value,
      trip_val: tripRateRef.current.value,
    };
    setWebData({
      ...inputDataObj,
    });
    props.onWebDataChange(inputDataObj);
  };

  return (
    <Card>
      <div className="web-fields-wrapper">
        <h2>Additional Web Fields:</h2>
        <Input
          type="number"
          name="id"
          ref={idRef}
          label="Device ID"
          val={webData.id}
          isChanged={onChangeHandler}
        />
        <Input
          type="text"
          name="key"
          ref={keyRef}
          label="Key"
          val={webData.key}
          isChanged={onChangeHandler}
        />
        <Input
          type="number"
          name="curVal"
          ref={curValRef}
          label="Flow %"
          val={webData.cur_val}
          isChanged={onChangeHandler}
        />
        <Input
          type="number"
          name="tripTime"
          ref={tripTimeRef}
          label="Trip Time"
          val={webData.trip_time}
          isChanged={onChangeHandler}
        />
        <Input
          type="number"
          name="tripRate"
          ref={tripRateRef}
          label="Trip Rate"
          val={webData.trip_val}
          isChanged={onChangeHandler}
        />
      </div>
    </Card>
  );
};
export default AdditionalWebFields;
