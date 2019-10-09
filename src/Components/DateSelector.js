import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = props => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="dateSelectorContainer">
      <h4>Select A Date</h4>
      <DatePicker
        className="dateSelector"
        dateFormat="yyyy-MM-dd"
        showPopperArrow={false}
        selected={startDate}
        onChange={date => {
          setStartDate(date);
        }}
      />
    </div>
  );
};

export default DateSelector;