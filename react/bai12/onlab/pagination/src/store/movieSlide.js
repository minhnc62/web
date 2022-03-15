import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import axios from "axios";

const BASE_URI = "https://www.omdbapi.com/?apikey=2b2bae41";

const searchMovieByTitle = createAsyncThunk("search", async (_, thunk) => {
  // return axios
  //   .get(URL + payload)
  //   .then((res) => res.data)
  //   .catch((err) => isRejectedWithValue(err));
  const title = thunk.getState().movie.title;


  return fetch(BASE_URI + "&s=" + title)
    .then((res) => res.json())
    .then((json) => {
      if (json.Error) {
        return thunk.rejectWithValue(json.Error);
      } else {
        return thunk.fulfillWithValue(json);
      }
    });
});

const getMovieByPage = createAsyncThunk("page" , async({page },thunk)=>{
  
  const title = thunk.getState().movie.title;
  return fetch(BASE_URI + "&s=" + title+ "&page=" + page)
    .then((res) => res.json())
    .then((json) => {
      if (json.Error) {
        return thunk.rejectWithValue(json.Error);
      } else {
        return thunk.fulfillWithValue(json);
      }
    });
});

const getMovieById = createAsyncThunk("getMovieById", async({id}, thunk)=>{
  return fetch(BASE_URI  +"&i=" + id)
    .then((res) => res.json())
    .then((json) => {
      if (json.Error) {
        return thunk.rejectWithValue(json.Error);
      } else {
        return thunk.fulfillWithValue(json);
      }
    });
})

const movieSlide = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    loading: "idle",
    error: null,
    totalResults: null,
    page: 1,
    title:"",
    movie: null,
    
  },
  reducers: {
    changeTitle(state, action){
      state.title = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(searchMovieByTitle.pending, (state, action) => {
      state.loading = "loading ...";
     
    });
    builder.addCase(searchMovieByTitle.fulfilled, (state, action) => {
      state.loading = "resolved";
      state.error = null;
      state.movies = action.payload.Search;
      state.totalResults = action.payload.totalResults;
    });

    builder.addCase(searchMovieByTitle.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = action.payload;
    });

    builder.addCase(getMovieByPage.pending, (state, action) =>{
      state.loading = "loading ...";

    });
    builder.addCase(getMovieByPage.rejected, (state, action) =>{
      state.loading = "rejected";
      state.error = action.payload.Error;

    });
    builder.addCase(getMovieByPage.fulfilled, (state, action) =>{
      state.loading = "resolved";
      state.error = null;
      state.movies = action.payload.Search;
    });

    builder.addCase(getMovieById.pending, (state, action) =>{
      state.loading = "loading ...";
    });
    builder.addCase(getMovieById.rejected, (state, action) =>{
      state.loading = "rejected";
      state.error = action.payload;
    });
    builder.addCase(getMovieById.fulfilled, (state, action) =>{
      state.loading = "resolved";
      state.error = null;
      state.movie = action.payload;
    });
  },
});

export default movieSlide.reducer;
export const {changeTitle} = movieSlide.actions;
export { searchMovieByTitle, getMovieByPage, getMovieById };
