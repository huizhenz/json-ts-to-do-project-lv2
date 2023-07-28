import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../redux/config/configStore";
import { deleteTodo, updateTodo } from "../../redux/modules/todoSlice";
import { Link } from "react-router-dom";

interface HomeProps {
  isDone: boolean;
}

const TodoList: React.FC<HomeProps> = ({ isDone }) => {
  // 명시적인 타입 설정
  const { todos } = useAppSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();

  const handlerDeleteTodo = (id: string): void => {
    dispatch(deleteTodo(id));
  };
  const handlerUpdateTodo = (id: string): void => {
    dispatch(updateTodo(id));
  };

  return (
    <div>
      <h2>{isDone ? "完成" : "进行"}</h2>
      {todos
        .filter((todo) => todo.isDone === isDone)
        .map((todo) => {
          return (
            <div key={todo.id}>
              날짜 : {todo.createdAt}
              <br />
              제목 : {todo.title}
              <br />
              내용 : {todo.contents}
              <button onClick={() => handlerDeleteTodo(todo.id)}>삭제</button>
              <button onClick={() => handlerUpdateTodo(todo.id)}>
                {isDone ? "취소" : "완료"}
              </button>
              <Link to={`detail/${todo.id}`}>
                <button>상세페이지</button>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
