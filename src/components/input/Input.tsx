import React, { useState } from "react";
import shortid from "shortid";
import { useAppDispatch } from "../../hooks";
import { addTodo } from "../../redux/modules/todoSlice";
import { styled } from "styled-components";

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
    <InputContainer>
      <form onSubmit={handlerAddTodo}>
        <InputForm
          width=""
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="Wirte a new title ..."
        />
        <InputForm
          width="medium"
          type="text"
          value={contents}
          onChange={onChangeContents}
          placeholder="Wirte a new to do ..."
        />
        <InputButton isDone={isDone}>추가</InputButton>
      </form>
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  border-bottom: 1px solid #b8b8b8;
  padding-bottom: 30px;
`;

const InputForm = styled.input<{ width: string }>`
  width: ${(props) => (props.width ? "400px" : "300px")};
  background-color: #d3d3d3;
  border: none;
  border-radius: 5px;
  margin: 0 35px 5px 0;
  padding: 7px;
`;

const InputButton = styled.button<{ isDone: boolean }>`
  color: #ffffff;
  font-weight: 600;
  background-color: ${(props) => (props.isDone ? "#f4b57b" : "#7bc7d0;")};
  border: none;
  border-radius: 5px;
  margin-left: 7px;
  padding: 5px 12px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isDone ? "#df9754" : "#62a7ae;")};
  }
`;
