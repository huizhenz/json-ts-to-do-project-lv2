import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../redux/config/configStore";
import { Todo, deleteTodo, editTodo } from "../redux/modules/todoSlice";

const Detail = () => {
  const params = useParams();

  const { todos } = useAppSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();

  const todo: Todo | undefined = todos.find((todo) => todo.id === params.id);

  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const handlerDeleteTodo = (id: string): void => {
    dispatch(deleteTodo(id));
  };

  const handlerEditTodo = (todo: Todo): void => {
    if (!isEdit) {
      setIsEdit(true);
      setTitle(todo.title);
      setContents(todo.contents);
    } else {
      if (!todo.title || !todo.contents) {
        return alert("내용을 입력해 주세요.");
      }

      const edtiedTodo = {
        ...todo,
        title,
        contents,
      };

      dispatch(editTodo(edtiedTodo));
      setIsEdit(false);
    }
  };

  return (
    <div>
      <Link to="/">
        <button>홈</button>
      </Link>
      {todo && (
        <div>
          <div>날짜 : {todo.createdAt}</div>
          {isEdit ? (
            <input type="text" value={title} onChange={onChangeTitle} />
          ) : (
            <div>제목 : {todo.title}</div>
          )}
          {isEdit ? (
            <input type="text" value={contents} onChange={onChangeContents} />
          ) : (
            <div>내용 : {todo.contents}</div>
          )}
          <button onClick={() => handlerEditTodo(todo)}>
            {isEdit ? "저장" : "수정"}
          </button>
          <button onClick={() => handlerDeleteTodo(todo.id)}>삭제</button>
        </div>
      )}
    </div>
  );
};

export default Detail;
