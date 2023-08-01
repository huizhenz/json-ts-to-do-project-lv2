import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

export interface Todo {
  id: string;
  title: string;
  contents: string;
  createdAt: string;
  isDone: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [
    {
      id: shortid.generate(),
      title: "텐텐이 물주기",
      contents: "무럭무럭 자라라 텐텐아 ~",
      createdAt: "Friday, Jul 28, 2023",
      isDone: false,
    },
    {
      id: shortid.generate(),
      title: "피크닉 가기",
      contents: "블루투스 스피커 꼭 챙기기 ~",
      createdAt: "Tuesday, Aug 1, 2023",
      isDone: true,
    },
  ],
};

const todoSlice = createSlice({
  name: "todos", // 이 모듈의 이름
  initialState, // 이 모듈의 초기상태 값
  reducers: {
    // Reducer 안에서 만든 함수 자체가 리듀서의 로직이자, 액션크리에이터가 된다.
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    },

    editTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
            contents: action.payload.contents,
          };
        } else {
          return todo;
        }
      });
    },
  }, // 이 모듈의 Reducer 로직
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addTodo, deleteTodo, updateTodo, editTodo } = todoSlice.actions;

// Reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todoSlice.reducer;
