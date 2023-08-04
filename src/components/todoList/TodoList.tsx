import React from "react";
import Input from "../input/Input";
import Detail from "../detail/Detail";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Todo, getTodos, updateTodo } from "../../api/todos";
import * as S from "./StyleTodoList";
import loadingImg from "../../assets/loading.gif";

interface HomeProps {
  isDone: boolean;
  isClicked: number;
  setIsClicked: React.Dispatch<React.SetStateAction<number>>;
}

const TodoList: React.FC<HomeProps> = ({ isDone, isClicked, setIsClicked }) => {
  const {
    data: todos = [],
    isLoading,
    isError,
  } = useQuery<Todo[], Error>("todos", getTodos);

  const queryClient = useQueryClient();
  const updateMutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const handlerClickDetail = (id: number): void => {
    setIsClicked(id);
  };

  const handlerUpdateTodo = (todo: Todo): void => {
    const updatedtodo = { ...todo, isDone: !todo.isDone };
    updateMutation.mutate(updatedtodo);
    setIsClicked(0);
  };

  if (isLoading) {
    return <img src={loadingImg} />;
  }

  if (isError) {
    return <h1>오류가 발생했습니다 ...</h1>;
  }

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
                    onChange={() => handlerUpdateTodo(todo)}
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
        {isClicked ? <Detail paramsId={isClicked} /> : <></>}
      </S.ListWrapper>
    </S.ListContainer>
  );
};

export default TodoList;
