import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "https://api.spacexdata.com/v4/rockets";

const initialState = {
  rockets: [],
  loading: false,
  error: "",
};

export const getRocket = createAsyncThunk("rocket/getRocket", async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const rocketSlice = createSlice({
  name: "rocket",
  initialState,
  reducers: {
    reserveRocket: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      }),
    }),
    cancelRocket: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      }),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRocket.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRocket.fulfilled, (state, action) => {
        state.rockets = action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.name,
          description: rocket.description,
          flickr_images: rocket.flickr_images[0],
          reserved: false,
        }));
        state.loading = false;
      })
      .addCase(getRocket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default rocketSlice.reducer;
export const { reserveRocket, cancelRocket } = rocketSlice.actions;
