import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { RootState } from "../redux/config/configStore";
import { Todo } from "../redux/modules/todoSlice";

const Detail = () => {
  const { id } = useParams();

  const { todos } = useAppSelector((state: RootState) => state.todos);
  const todo: Todo | undefined = todos.find((todo) => todo.id === id);

  return (
    <div>
      <Link to="/">
        <button>홈</button>
      </Link>
      {todo && (
        <div>
          <div>날짜 : {todo.createdAt}</div>
          <div>제목 : {todo.title}</div>
          <div>내용 : {todo.contents}</div>
        </div>
      )}
    </div>
  );
};

export default Detail;
