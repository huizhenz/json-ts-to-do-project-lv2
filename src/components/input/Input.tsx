import React, { useState } from "react";
import shortid from "shortid";
import { useAppDispatch } from "../../hooks";
import { addTodo } from "../../redux/modules/todoSlice";
import * as S from "./StyleInput";

interface InputProps {
  isDone: boolean;
}

const Input: React.FC<InputProps> = ({ isDone }) => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  //  날짜 포맷팅
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();
  const year = today.getFullYear();
  const month = months[today.getMonth()];
  const date = today.getDate();
  const day = days[today.getDay()];

  const dateFormat = `${day}, ${month} ${date}, ${year}`;

  const handlerAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !contents) {
      return alert("내용을 입력해 주세요.");
    }

    const newTodo = {
      id: shortid.generate(),
      title,
      contents,
      createdAt: dateFormat,
      isDone: false,
    };

    dispatch(addTodo(newTodo));

    setTitle("");
    setContents("");
  };

  return (
    <S.InputContainer>
      <form onSubmit={handlerAddTodo}>
        <S.InputForm
          width=""
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="Wirte a new title ..."
        />
        <S.InputForm
          width="medium"
          type="text"
          value={contents}
          onChange={onChangeContents}
          placeholder="Wirte a new to do ..."
        />
        <S.InputButton isdone={+isDone}>추가</S.InputButton>
      </form>
    </S.InputContainer>
  );
};

export default Input;
