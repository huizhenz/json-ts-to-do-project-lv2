import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../modules/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

// state와 dispatch 타입을 store에서 추론(Infer)해서 export
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
