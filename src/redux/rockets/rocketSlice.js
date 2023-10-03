import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiURL = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  loading: false,
  error: '',
};

export const getRocket = createAsyncThunk('rocket/getRocket', async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRocket.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRocket.fulfilled, (state, action) => {
        state.rockets = action.payload;
        state.loading = false;
      })
      .addCase(getRocket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default rocketSlice.reducer;
