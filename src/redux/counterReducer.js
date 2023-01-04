import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    error: null,
  },
  reducers: {
    set(state, action) {
      state.value = action.payload;
    },
    verify(state, action) {
      if (isNaN(action.payload)) {
        state.error = "Введенное значение должно быть числом";
      }
      if (action.payload > 5 || action.payload < 0) {
        state.error = "Число должно быть от 0 до 5 ";
      }
    },
    resetError(state) {
      state.error = null;
    },
  },
});

export const { set, verify, resetError } = counterSlice.actions;

export default counterSlice.reducer;
