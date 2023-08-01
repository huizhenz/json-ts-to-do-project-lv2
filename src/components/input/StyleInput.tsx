import { styled } from "styled-components";

export const InputContainer = styled.div`
  border-bottom: 1px solid #b8b8b8;
  padding-bottom: 38px;
`;

export const InputForm = styled.input<{ width: string }>`
  width: ${(props) => (props.width ? "400px" : "300px")};
  background-color: #d3d3d3;
  border: none;
  border-radius: 5px;
  margin: 0 35px 5px 0;
  padding: 7px;
`;

export const InputButton = styled.button<{ isdone: number }>`
  color: #ffffff;
  font-weight: 600;
  background-color: ${(props) => (props.isdone ? "#f4b57b" : "#7bc7d0;")};
  border: none;
  border-radius: 5px;
  margin-left: 7px;
  padding: 5px 12px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isdone ? "#df9754" : "#62a7ae;")};
  }
`;
