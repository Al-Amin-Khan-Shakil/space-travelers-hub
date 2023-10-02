import { createSlice } from "@reduxjs/toolkit";

initialState = {
  rockets: []
}

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducer: {},
})

export default rocketSlice.reducer;