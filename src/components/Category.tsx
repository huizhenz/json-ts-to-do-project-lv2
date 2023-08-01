import React from "react";
import { styled } from "styled-components";

interface CategoryProps {
  isSelected: string;
  setIsSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Category: React.FC<CategoryProps> = ({ isSelected, setIsSelected }) => {
  const handlerIsSelected = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    setIsSelected(name);
    console.log(isSelected);
  };

  return (
    <CategoryContainer>
      <CategoryWrapper>
        <CategoryBtn name="Working" onClick={handlerIsSelected}>
          Working
        </CategoryBtn>
        <CategoryBtn name="Done" onClick={handlerIsSelected}>
          Done
        </CategoryBtn>
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
  margin: 0 10px;
  padding: 30px 0 20px 0;
`;

const CategoryBtn = styled.button`
  font-size: 18px;
  text-align: left;
  background-color: transparent;
  border: none;
  margin-bottom: 15px;
  padding: 15px;
  cursor: pointer;
`;
