import { useState } from "react";
import * as S from "./StyleTodoCalendar";

const TodoCalendar = () => {
  const [today, setToday] = useState(new Date());

  const onChangeToday = () => {
    setToday(today);
  };

  return (
    <S.CalendarBox>
      <S.StyleCalendar locale="en" onChange={onChangeToday} value={today} />
    </S.CalendarBox>
  );
};

export default TodoCalendar;
