import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import axios from axios

const getTodos = createAsyncThunk(
  "todo/get",
  async (payload, { rejectWithValue }) => {
      // return axios
      //       . get("https://jsonplaceholder.typicode.com/todos")
      //       .then((res) => res.data)
      //       .catch(err => rejectWithValue(err))
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("loi roi");
        }
      })
      .then((data) => data)
      .catch((err) => rejectWithValue(err));
  }
);

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
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getTodos.pending, (state, actions) => {})
  //     .addCase(getTodos.fulfilled, (state, actions) => {})
  //     .addCase(getTodos.rejected, (state, actions) => {
  //         console.log("Error" , actions.payload.message)
  //     });
  // },
});

export const todoReducer = todoSlice.reducer;
export const { add, edit, remove, clear } = todoSlice.actions;
//export { getTodos };
export const useTodo = (state) => state.todo;
