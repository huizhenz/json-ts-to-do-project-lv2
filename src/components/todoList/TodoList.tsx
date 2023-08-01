import React, { useState } from "react";
import Input from "../input/Input";
import Detail from "../detail/Detail";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../redux/config/configStore";
import { updateTodo } from "../../redux/modules/todoSlice";
import * as S from "./StyleTodoList";

interface HomeProps {
  isDone: boolean;
  isClicked: string;
  setIsClicked: React.Dispatch<React.SetStateAction<string>>;
}

const TodoList: React.FC<HomeProps> = ({ isDone, isClicked, setIsClicked }) => {
  // 명시적인 타입 설정
  const { todos } = useAppSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();

  const handlerClickDetail = (id: string): void => {
    setIsClicked(id);
  };

  const handlerUpdateTodo = (id: string): void => {
    dispatch(updateTodo(id));
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

  return (
    <S.ListContainer>
      <S.ListCategory>{isDone ? "Done" : "Working"}</S.ListCategory>
      <S.TodayDate>It's {dateFormat}</S.TodayDate>
      <Input isDone={isDone} />
      <S.ListWrapper>
        <S.ListBox>
          {todos
            .filter((todo) => todo.isDone === isDone)
            .map((todo) => {
              return (
                <S.TodoBox key={todo.id}>
                  <S.TodoCheckBox
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => handlerUpdateTodo(todo.id)}
                  />
                  <S.TodoInfo>
                    <S.TodoTitle isdone={+todo.isDone}>
                      {todo.title}
                    </S.TodoTitle>
                    <S.TodoContents isdone={+todo.isDone}>
                      {todo.contents}
                    </S.TodoContents>
                    <S.TodoDate>{todo.createdAt}</S.TodoDate>
                    <S.TodoDetailButton
                      isdone={+isDone}
                      size="24"
                      onClick={() => {
                        handlerClickDetail(todo.id);
                      }}
                    />
                  </S.TodoInfo>
                </S.TodoBox>
              );
            })}
        </S.ListBox>
        {isClicked ? <Detail id={isClicked} /> : <></>}
      </S.ListWrapper>
    </S.ListContainer>
  );
};

export default TodoList;
