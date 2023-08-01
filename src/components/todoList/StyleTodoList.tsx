import { styled } from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const ListContainer = styled.div`
  margin: 30px 30px 20px 20px;
`;

export const ListCategory = styled.div`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ListBox = styled.div`
  max-height: 450px;
  overflow-y: auto;
`;

export const TodayDate = styled.div`
  color: #8d8d8d;
  font-size: 21px;
  margin-bottom: 35px;
`;

export const TodoBox = styled.div`
  position: relative;
  width: 500px;
  display: flex;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 20px 15px;
`;

export const TodoCheckBox = styled.input`
  width: 18px;
  margin-right: 20px;
  cursor: pointer;
`;

export const TodoInfo = styled.div``;

export const TodoTitle = styled.div<{ isdone: number }>`
  font-size: 16px;
  font-weight: 600;
  text-decoration: ${(props) => (props.isdone ? "line-through" : "")};
  margin: 0 170px 5px 0;
`;

export const TodoContents = styled.div<{ isdone: number }>`
  font-size: 15px;
  text-decoration: ${(props) => (props.isdone ? "line-through" : "")};
  margin-right: 20px;
`;

export const TodoDate = styled.div`
  position: absolute;
  top: 13%;
  right: 2%;
  color: #5f5f5f;
  font-size: 14px;
`;

export const TodoDetailButton = styled(AiOutlinePlusCircle)<{ isdone: number }>`
  position: absolute;
  bottom: 17%;
  right: 2%;
  color: #000000;

  &:hover {
    color: ${(props) => (props.isdone ? "#df9754" : "#62a7ae;")};
  }
`;
