import { useState, useRef } from "react";
import Card from "./ui/Card";
import InputWrapper from "./ui/InputWrapper";

import "./AdditionalWebFields.css";
import SamplePostBody from "./SamplePostBody";

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
  };

  return (
    <Card>
      <div className="web-fields-wrapper">
        <h2>Additional Web Fields:</h2>
        <InputWrapper name="id" label="Device ID">
          <input
            name="id"
            ref={idRef}
            type="number"
            value={webData.id}
            min="0"
            max="999999999"
            onChange={onChangeHandler}
          />
        </InputWrapper>

        <InputWrapper name="key" label="Key">
          <input
            name="key"
            ref={keyRef}
            type="text"
            value={webData.key}
            onChange={onChangeHandler}
          />
        </InputWrapper>

        <InputWrapper
          name="curVal"
          label={props.statusState & 2048 ? "POLD ID" : "Flow %"}
        >
          <input
            name="curVal"
            ref={curValRef}
            type="number"
            value={webData.cur_val}
            min="0"
            max="255"
            onChange={onChangeHandler}
          />
        </InputWrapper>

        <InputWrapper
          name="tripTime"
          label={props.statusState & 2048 ? "Alarm Mins" : "Trip Time"}
        >
          <input
            name="tripTime"
            ref={tripTimeRef}
            type="number"
            value={webData.trip_time}
            min="0"
            max="255"
            onChange={onChangeHandler}
          />
        </InputWrapper>

        <InputWrapper
          name="tripRate"
          label={props.statusState & 2048 ? "Battery Level" : "Trip Rate"}
        >
          <input
            name="tripRate"
            ref={tripRateRef}
            type="number"
            value={webData.trip_val}
            min="0"
            max="255"
            onChange={onChangeHandler}
          />
        </InputWrapper>
      </div>
      <SamplePostBody webData={webData} statusState={props.statusState} />
    </Card>
  );
};
export default AdditionalWebFields;
