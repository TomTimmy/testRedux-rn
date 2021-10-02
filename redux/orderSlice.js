import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    storeName: "",
    menus: [],
  },
  reducers: {
    setStore: (state, action) => {
      state.storeName = action.payload;
    },
    addMenu: (state, action) => {
      state.menus.push({ menuInfo: action.payload });
    },
  },
});

// ? Exporting.
export const { setStore, addMenu } = orderSlice.actions;
const orderReducer = orderSlice.reducer;
export default orderReducer;
