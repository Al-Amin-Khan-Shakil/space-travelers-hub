import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.spacexdata.com/v3/missions";

const initialState = {
  missionData: [],
};

export const fetchMissionsAsync = createAsyncThunk(
  "missions/fetchMissions",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    joinMission: (state, action) => ({
      ...state,
      missionData: state.missionData.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      }),
    }),
    cancelMission: (state, action) => ({
      ...state,
      missionData: state.missionData.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      }),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissionsAsync.fulfilled, (state, action) => {
      state.missionData = action.payload.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));
    });
  },
});

export default missionsSlice.reducer;
export const { cancelMission, joinMission } = missionsSlice.actions;
