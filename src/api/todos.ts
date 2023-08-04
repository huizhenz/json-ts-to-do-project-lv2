import api from "../axios/api";

export interface Todo {
  id: number;
  title: string;
  contents: string;
  createdAt: string;
  isDone: boolean;
}

const getTodos = async (): Promise<Todo[]> => {
  const { data } = await api.get(`/todos`);
  return data;
};

const addTodo = async (newTodo: Omit<Todo, "id">): Promise<void> => {
  await api.post(`/todos`, newTodo);
};

const deleteTodo = async (id: number): Promise<void> => {
  await api.delete(`/todos/${id}`);
};

const updateTodo = async (updatedTodo: Todo): Promise<void> => {
  await api.patch(`/todos/${updatedTodo.id}`, updatedTodo);
};

const editTodo = async (editedTodo: Todo): Promise<void> => {
  await api.patch(`/todos/${editedTodo.id}`, editedTodo);
};

export { getTodos, addTodo, deleteTodo, updateTodo, editTodo };
