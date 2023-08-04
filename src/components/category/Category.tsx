import React, { useState } from "react";
import { useQuery } from "react-query";
import { getTodos } from "../../api/todos";
import TodoCalendar from "../calendar/TodoCalendar";
import * as S from "./StyleCategory";
import loadingImg from "../../assets/loading.gif";

interface CategoryProps {
  setIsSelected: React.Dispatch<React.SetStateAction<string>>;
  setIsClicked: React.Dispatch<React.SetStateAction<number>>;
}

const Category: React.FC<CategoryProps> = ({ setIsSelected, setIsClicked }) => {
  const { data: todos = [], isLoading, isError } = useQuery("todos", getTodos);

  const [filter, setFilter] = useState<boolean>(false);

  const workingListCount = todos.filter((todo) => todo.isDone === false).length;
  const doneListCount = todos.filter((todo) => todo.isDone === true).length;

  const handlerIsSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    setIsSelected(name);
    setFilter((prev) => !prev);
    setIsClicked(0);
  };

  if (isLoading) {
    return <h1>잠시만 기다려주세요 ...</h1>;
  }

  if (isError) {
    return <h1>오류가 발생했습니다 ...</h1>;
  }

  return (
    <S.CategoryContainer>
      <S.CategoryWrapper>
        <S.CategoryBox variant={+!filter}>
          <S.CategoryBtn name="Working" onClick={handlerIsSelect}>
            Working
          </S.CategoryBtn>
          <S.CategoryCountBox isdone={0}>
            <S.CategoryCount>{workingListCount}</S.CategoryCount>
          </S.CategoryCountBox>
        </S.CategoryBox>
        <S.CategoryBox variant={+filter}>
          <S.CategoryBtn name="Done" onClick={handlerIsSelect}>
            Done
          </S.CategoryBtn>
          <S.CategoryCountBox isdone={1}>
            <S.CategoryCount>{doneListCount}</S.CategoryCount>
          </S.CategoryCountBox>
        </S.CategoryBox>
      </S.CategoryWrapper>
      <TodoCalendar />
    </S.CategoryContainer>
  );
};

export default Category;
