import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const NonPage = () => {
  return (
    <Link to="/">
      <NonPageContainer>없는 페이지입니다.</NonPageContainer>
    </Link>
  );
};

export default NonPage;

const NonPageContainer = styled.div`
  display: flex;
  background-color: #e5e7eb;
  border-radius: 15px;
  margin: 10px 5px;
`;
