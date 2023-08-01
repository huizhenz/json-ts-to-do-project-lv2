import { styled } from "styled-components";

export const InputContainer = styled.div`
  border-bottom: 1px solid #b8b8b8;
  padding-bottom: 33px;
`;

export const InputForm = styled.input<{ width: string }>`
  width: ${(props) => (props.width ? "380px" : "280px")};
  background-color: #d3d3d3;
  border: none;
  border-radius: 5px;
  margin: 0 35px 5px 0;
  padding: 10px 7px;
`;

export const InputButton = styled.button<{ isdone: number }>`
  color: #ffffff;
  font-weight: 600;
  background-color: ${(props) => (props.isdone ? "#f4b57b" : "#7bc7d0;")};
  border: none;
  border-radius: 5px;
  margin-left: 5px;
  padding: 7px 12px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isdone ? "#df9754" : "#62a7ae;")};
  }
`;
