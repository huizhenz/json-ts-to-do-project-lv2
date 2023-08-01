import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { styled } from "styled-components";

const TodoCalendar = () => {
  const [value, onChange] = useState(new Date());

  const handleCalendarChange = () => {
    onChange(value);
  };

  return (
    <div>
      <StyleCalendar
        locale="en"
        onChange={handleCalendarChange}
        value={value}
      />
    </div>
  );
};

export default TodoCalendar;

const StyleCalendar = styled(Calendar)`
  .react-calendar {
    width: 300px;
    max-width: 100%;
    background: white;
    border: 1px solid #a0a096;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
`;
