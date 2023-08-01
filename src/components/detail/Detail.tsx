import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../redux/config/configStore";
import { Todo, deleteTodo, editTodo } from "../../redux/modules/todoSlice";
import * as S from "./StyleDetail";

interface DetailProps {
  id: string;
}

const Detail: React.FC<DetailProps> = ({ id }) => {
  const { todos } = useAppSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();

  const todo: Todo | undefined = todos.find((todo) => todo.id === id);

  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [isEdited, setIsEdited] = useState<boolean>(false);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  };

  const handlerDeleteTodo = (id: string): void => {
    dispatch(deleteTodo(id));
  };

  const handlerEditTodo = (todo: Todo): void => {
    if (!isEdited) {
      setIsEdited(true);
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
      setIsEdited(false);
    }
  };

  return (
    <S.DetailContainer>
      {todo && (
        <S.DetailWrapper isdone={+todo.isDone}>
          <S.DetailDate>{todo.createdAt}</S.DetailDate>
          {isEdited ? (
            <S.InputEditTitle
              type="text"
              value={title}
              onChange={onChangeTitle}
            />
          ) : (
            <S.DetailTitle> {todo.title}</S.DetailTitle>
          )}
          {isEdited ? (
            <S.InputEditContents value={contents} onChange={onChangeContents} />
          ) : (
            <S.DetailContents>{todo.contents}</S.DetailContents>
          )}
          <S.DetailButtonBox>
            {isEdited ? (
              <S.SaveButton size="24" onClick={() => handlerEditTodo(todo)} />
            ) : (
              <S.EditButton size="24" onClick={() => handlerEditTodo(todo)} />
            )}
            <S.DeleteButton
              size="26"
              onClick={() => handlerDeleteTodo(todo.id)}
            />
          </S.DetailButtonBox>
        </S.DetailWrapper>
      )}
    </S.DetailContainer>
  );
};

export default Detail;
