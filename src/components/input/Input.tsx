import React, { useState } from "react";
import shortid from "shortid";
import { useAppDispatch } from "../../hooks";
import { addTodo } from "../../redux/modules/todoSlice";

const Input = () => {
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
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dateFormat = `${year}.${month}.${day}`;

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
    <div>
      <form onSubmit={handlerAddTodo}>
        <input type="text" value={title} onChange={onChangeTitle} />
        <input type="text" value={contents} onChange={onChangeContents} />
        <button>추가</button>
      </form>
    </div>
  );
};

export default Input;
