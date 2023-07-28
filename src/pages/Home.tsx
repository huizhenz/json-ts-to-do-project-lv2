import React from "react";
import Header from "../components/common/Header";
import Input from "../components/input/Input";
import TodoList from "../components/todoList/TodoList";

const Home = () => {
  return (
    <>
      <Header />
      <Input />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </>
  );
};

export default Home;
