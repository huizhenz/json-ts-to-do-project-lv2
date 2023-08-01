import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../redux/config/configStore";
import { Todo, deleteTodo, editTodo } from "../redux/modules/todoSlice";
import { styled } from "styled-components";
import { BiTrash } from "react-icons/bi";
import { FiEdit2, FiSave } from "react-icons/fi";

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
    <DetailContainer>
      {todo && (
        <DetailWrapper isdone={+todo.isDone}>
          <DetailDate>{todo.createdAt}</DetailDate>
          {isEdited ? (
            <InputEditTitle
              type="text"
              value={title}
              onChange={onChangeTitle}
            />
          ) : (
            <DetailTitle> {todo.title}</DetailTitle>
          )}
          {isEdited ? (
            <InputEditContents value={contents} onChange={onChangeContents} />
          ) : (
            <DetailContents>{todo.contents}</DetailContents>
          )}
          <DetailButtonBox>
            {isEdited ? (
              <SaveButton size="24" onClick={() => handlerEditTodo(todo)} />
            ) : (
              <EditButton size="24" onClick={() => handlerEditTodo(todo)} />
            )}
            <DeleteButton
              size="26"
              onClick={() => handlerDeleteTodo(todo.id)}
            />
          </DetailButtonBox>
        </DetailWrapper>
      )}
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.div`
  margin: 80px 0;
`;

const DetailWrapper = styled.div<{ isdone: number }>`
  position: relative;
  width: 230px;
  background-color: ${(props) => (props.isdone ? "#FCCEA3" : "#CDE7EA;")};
  border-radius: 15px;
  padding: 30px 20px;
`;

const DetailDate = styled.div`
  text-align: right;
  font-size: 14px;
  margin-bottom: 20px;
`;

const DetailTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const DetailContents = styled.div`
  font-size: 16px;
  margin-bottom: 70px;
`;

const DetailButtonBox = styled.div`
  position: absolute;
  bottom: 8%;
  right: 7%;
`;

const SaveButton = styled(FiSave)`
  cursor: pointer;

  &:hover {
    color: #901212;
  }
`;

const EditButton = styled(FiEdit2)`
  cursor: pointer;

  &:hover {
    color: #901212;
  }
`;

const DeleteButton = styled(BiTrash)`
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    color: #901212;
  }
`;

const InputEditTitle = styled.input`
  width: 90%;

  background-color: transparent;
  border: 1px solid #636363;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 5px 10px;
`;

const InputEditContents = styled.textarea`
  width: 90%;
  height: 80px;

  background-color: transparent;
  border: 1px solid #454545;
  border-radius: 5px;
  margin-bottom: 60px;
  padding: 5px 10px;
`;
