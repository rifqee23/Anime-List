import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // Menyimpan produk dari API
  filteredProducts: [], // Produk yang telah difilter
  searchQuery: "", // Query pencarian
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredProducts = state.products.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { setProducts, setSearchQuery } = productsSlice.actions;

export default productsSlice.reducer;
