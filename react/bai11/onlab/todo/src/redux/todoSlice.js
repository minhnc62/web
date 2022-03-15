import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      id: Math.floor(Math.random() * 9000) + 1000,
      content: "abc",
    },
  ],
  reducers: {
    add(state, { payload }) {
      const newTodo = {
        id: Math.floor(Math.random() * 9000) + 1000,
        content: payload,
      };
      state.push(newTodo);
    },

    edit(state, { payload: { id, content } }) {
      const todo = state.find((item) => item.id == id);

      todo.content = content;
    },
    remove(state, { payload }) {
      return state.filter((item) => item.id != payload);
    },
    clear(state) {
      state.length = 0;
    },
  },
 
});

export const todoReducer = todoSlice.reducer;
export const { add, edit, remove, clear } = todoSlice.actions;

export const useTodo = (state) => state.todo;
