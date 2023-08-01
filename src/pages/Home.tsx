import { useState } from "react";
import Category from "../components/Category";
import TodoList from "../components/todoList/TodoList";
import { styled } from "styled-components";

const Home = () => {
  const [isSelected, setIsSelected] = useState<string>("Working");
  const [isClicked, setIsClicked] = useState<string>("");

  return (
    <>
      <HomeContainer>
        <Category setIsSelected={setIsSelected} setIsClicked={setIsClicked} />
        {isSelected === "Working" ? (
          <TodoList
            isDone={false}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
        ) : (
          <TodoList
            isDone={true}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
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
