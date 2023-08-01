import { styled } from "styled-components";

export const CategoryContainer = styled.div`
  width: 230px;
  height: 700px;
  background-color: #ffffff;
  border-radius: 15px;
  margin: 25px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #b8b8b8;
  margin: 0 15px 30px 15px;
  padding: 30px 0 20px 0;
`;

export const CategoryBox = styled.div<{ variant: number }>`
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

export const CategoryBtn = styled.button`
  font-size: 18px;
  text-align: left;
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

export const CategoryCountBox = styled.div<{ isdone: number }>`
  width: 30px;
  background-color: ${(props) => (props.isdone ? "#f4b57b" : "#7bc7d0;")};
  border-radius: 10px;
  margin: 10px;
`;

export const CategoryCount = styled.div`
  color: #ffffff;
  font-size: 18px;
  padding: 5px 10px;
`;
