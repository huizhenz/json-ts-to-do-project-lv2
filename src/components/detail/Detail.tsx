import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Todo, deleteTodo, getTodos, editTodo } from "../../api/todos";
import * as S from "./StyleDetail";
import loadingImg from "../../assets/loadingImg.gif";

interface DetailProps {
  paramsId: number;
}

const Detail: React.FC<DetailProps> = ({ paramsId }) => {
  const { data: todos = [], isLoading, isError } = useQuery("todos", getTodos);
  const todo = todos.find((todo) => todo.id === paramsId);

  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      alert("삭제되었습니다.");
    },
  });
  const editMutation = useMutation(editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [isEdited, setIsEdited] = useState<boolean>(false);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  };

  const handlerDeleteTodo = (id: number): void => {
    if (window.confirm("삭제하시겠습니까?")) {
      deleteMutation.mutate(id);
    } else {
      alert("삭제가 취소되었습니다.");
    }
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

      editMutation.mutate(edtiedTodo);
      setIsEdited(false);
    }
  };

  if (isLoading) {
    return <img src={loadingImg} />;
  }

  if (isError) {
    return <h1>오류가 발생했습니다 ...</h1>;
  }

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
              size="24"
              onClick={() => handlerDeleteTodo(todo.id)}
            />
          </S.DetailButtonBox>
        </S.DetailWrapper>
      )}
    </S.DetailContainer>
  );
};

export default Detail;
