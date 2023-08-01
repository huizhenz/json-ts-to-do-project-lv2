import React, { useState } from "react";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../redux/config/configStore";
import * as S from "./StyleCategory";
import TodoCalendar from "../calendar/TodoCalendar";

interface CategoryProps {
  setIsSelected: React.Dispatch<React.SetStateAction<string>>;
  setIsClicked: React.Dispatch<React.SetStateAction<string>>;
}

const Category: React.FC<CategoryProps> = ({ setIsSelected, setIsClicked }) => {
  const { todos } = useAppSelector((state: RootState) => state.todos);

  const [filter, setFilter] = useState<boolean>(false);

  const workingListCount = todos.filter((todo) => todo.isDone === false).length;
  const doneListCount = todos.filter((todo) => todo.isDone === true).length;

  const handlerIsSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    setIsSelected(name);
    setFilter((prev) => !prev);
    setIsClicked("");
  };

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
      {/* <TodoCalendar /> */}
    </S.CategoryContainer>
  );
};

export default Category;
