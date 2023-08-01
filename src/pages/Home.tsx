import { useState } from "react";
import Category from "../components/Category";
import TodoList from "../components/todoList/TodoList";
import { styled } from "styled-components";

const Home = () => {
  const [isSelected, setIsSelected] = useState<string>("Working");

  return (
    <>
      <HomeContainer>
        <Category isSelected={isSelected} setIsSelected={setIsSelected} />
        {isSelected === "Working" ? (
          <TodoList isDone={false} />
        ) : (
          <TodoList isDone={true} />
        )}
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  background-color: #e5e7eb;
  border-radius: 15px;
  margin: 10px 5px;
`;
