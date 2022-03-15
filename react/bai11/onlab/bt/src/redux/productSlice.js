import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const getProducts = createAsyncThunk(
  "products/get",
  async (payload, { rejectWithValue }) => {
    return axios
      .get("https://fakestoreapi.com/products")
      .then((res) => res.data)
      .catch((err) => rejectWithValue(err));
  }
);


const getProductsById = createAsyncThunk(
    "products/getById",
    async (payload, { rejectWithValue }) => {
      return axios
        .get("https://fakestoreapi.com/products/" + payload)
        .then((res) => res.data)
        .catch((err) => rejectWithValue(err));
    }
  );

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    error: null,
    products: [],
    singleProduct: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });




    builder.addCase(getProductsById.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(getProductsById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      });
      builder.addCase(getProductsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },

  

  
});

export const productReducer = productSlice.reducer;
export { getProducts };
export { getProductsById };


export const useProductApi = (state) => state.product;

export const useProductById = (state) => state.product;

