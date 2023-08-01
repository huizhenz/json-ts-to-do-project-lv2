import { styled } from "styled-components";
import { BiTrash } from "react-icons/bi";
import { FiEdit2, FiSave } from "react-icons/fi";

export const DetailContainer = styled.div``;

export const DetailWrapper = styled.div<{ isdone: number }>`
  position: relative;
  width: 230px;
  background-color: ${(props) => (props.isdone ? "#FCCEA3" : "#CDE7EA;")};
  border-radius: 15px;
  padding: 30px 20px;
`;

export const DetailDate = styled.div`
  text-align: right;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const DetailTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const DetailContents = styled.div`
  font-size: 16px;
  margin-bottom: 70px;
`;

export const DetailButtonBox = styled.div`
  position: absolute;
  bottom: 8%;
  right: 7%;
`;

export const SaveButton = styled(FiSave)`
  cursor: pointer;

  &:hover {
    color: #901212;
  }
`;

export const EditButton = styled(FiEdit2)`
  cursor: pointer;

  &:hover {
    color: #901212;
  }
`;

export const DeleteButton = styled(BiTrash)`
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    color: #901212;
  }
`;

export const InputEditTitle = styled.input`
  width: 90%;

  background-color: transparent;
  border: 1px solid #636363;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 5px 10px;
`;

export const InputEditContents = styled.textarea`
  width: 90%;
  height: 80px;

  background-color: transparent;
  border: 1px solid #454545;
  border-radius: 5px;
  margin-bottom: 60px;
  padding: 5px 10px;
`;
