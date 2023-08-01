import React, { useState } from "react";
import { styled } from "styled-components";
import { useAppSelector } from "../hooks";
import { RootState } from "../redux/config/configStore";

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
    <CategoryContainer>
      <CategoryWrapper>
        <CategoryBox variant={+!filter}>
          <CategoryBtn name="Working" onClick={handlerIsSelect}>
            Working
          </CategoryBtn>
          <CategoryCountBox isdone={0}>
            <CategoryCount>{workingListCount}</CategoryCount>
          </CategoryCountBox>
        </CategoryBox>

        <CategoryBox variant={+filter}>
          <CategoryBtn name="Done" onClick={handlerIsSelect}>
            Done
          </CategoryBtn>
          <CategoryCountBox isdone={1}>
            <CategoryCount>{doneListCount}</CategoryCount>
          </CategoryCountBox>
        </CategoryBox>
      </CategoryWrapper>
    </CategoryContainer>
  );
};

export default Category;

const CategoryContainer = styled.div`
  width: 200px;
  height: 700px;
  background-color: #ffffff;
  border-radius: 15px;
  margin: 25px 30px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #b8b8b8;
  margin: 0 15px;
  padding: 30px 0 20px 0;
`;

const CategoryBox = styled.div<{ variant: number }>`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  margin: 10px 0;

  ${({ variant }) => {
    switch (variant) {
      case 1:
        return `
        background-color: #c7c7c7b9;
        `;
      case 0:
        return `
        background-color: #ffffff;
        `;
      default:
        return "";
    }
  }}
`;

const CategoryBtn = styled.button`
  font-size: 18px;
  text-align: left;
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const CategoryCountBox = styled.div<{ isdone: number }>`
  width: 30px;
  background-color: ${(props) => (props.isdone ? "#f4b57b" : "#7bc7d0;")};
  border-radius: 10px;
  margin: 10px;
`;

const CategoryCount = styled.div`
  color: #ffffff;
  font-size: 18px;
  padding: 5px 10px;
`;
