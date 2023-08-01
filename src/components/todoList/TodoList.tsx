import React, { useState } from "react";
import Input from "../input/Input";
import Detail from "../../pages/Detail";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../redux/config/configStore";
import { updateTodo } from "../../redux/modules/todoSlice";
import { styled } from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface HomeProps {
  isDone: boolean;
  isClicked: string;
  setIsClicked: React.Dispatch<React.SetStateAction<string>>;
}

const TodoList: React.FC<HomeProps> = ({ isDone, isClicked, setIsClicked }) => {
  // 명시적인 타입 설정
  const { todos } = useAppSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();

  // "Done" 카테고리를 클릭할 때 isClicked 상태를 초기화하는 함수
  const handlerClickDoneCategory = () => {
    setIsClicked(""); // isClicked 상태를 빈 문자열로 설정하여 초기화
  };

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
    <ListContainer>
      <ListCategory>{isDone ? "Done" : "Working"}</ListCategory>
      <TodayDate>It's {dateFormat}</TodayDate>
      <Input isDone={isDone} />
      <ListWrapper>
        <ListBox>
          {todos
            .filter((todo) => todo.isDone === isDone)
            .map((todo) => {
              return (
                <TodoBox key={todo.id}>
                  <TodoCheckBox
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => handlerUpdateTodo(todo.id)}
                  />
                  <TodoInfo>
                    <TodoTitle isdone={+todo.isDone}>{todo.title}</TodoTitle>
                    <TodoContents isdone={+todo.isDone}>
                      {todo.contents}
                    </TodoContents>
                    <TodoDate>{todo.createdAt}</TodoDate>
                    <TodoDetailButton
                      isdone={+isDone}
                      size="24"
                      onClick={() => {
                        handlerClickDetail(todo.id);
                      }}
                    />
                  </TodoInfo>
                </TodoBox>
              );
            })}
        </ListBox>
        {isClicked ? <Detail id={isClicked} /> : <></>}
      </ListWrapper>
    </ListContainer>
  );
};

export default TodoList;

const ListContainer = styled.div`
  margin: 30px 30px 20px 20px;
`;

const ListCategory = styled.div`
  font-size: 36px;
  /* font-weight: 600; */
  margin-bottom: 10px;
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const ListBox = styled.div``;

const TodayDate = styled.div`
  color: #8d8d8d;
  font-size: 21px;
  margin-bottom: 35px;
`;

const TodoBox = styled.div`
  position: relative;
  width: 500px;
  display: flex;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 20px 15px;
`;

const TodoCheckBox = styled.input`
  width: 18px;
  margin-right: 20px;
  cursor: pointer;
`;

const TodoInfo = styled.div``;

const TodoTitle = styled.div<{ isdone: number }>`
  font-weight: 600;
  text-decoration: ${(props) => (props.isdone ? "line-through" : "")};
  margin-bottom: 5px;
`;

const TodoContents = styled.div<{ isdone: number }>`
  text-decoration: ${(props) => (props.isdone ? "line-through" : "")};
`;

const TodoDate = styled.div`
  position: absolute;
  top: 13%;
  right: 2%;
  color: #5f5f5f;
  font-size: 14px;
`;

const TodoDetailButton = styled(AiOutlinePlusCircle)<{ isdone: number }>`
  position: absolute;
  bottom: 17%;
  right: 2%;
  color: #000000;

  &:hover {
    color: ${(props) => (props.isdone ? "#df9754" : "#62a7ae;")};
  }
`;
