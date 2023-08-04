import React, { useState } from "react";
import Category from "../../components/category/Category";
import TodoList from "../../components/todoList/TodoList";
import { HomeContainer } from "./StyleHome";

const Home = () => {
  const [isSelected, setIsSelected] = useState<string>("Working");
  const [isClicked, setIsClicked] = useState<number>(0);

  return (
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
  );
};

export default Home;
