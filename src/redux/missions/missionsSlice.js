import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missionData: [],
};

export const fetchMissionsAsync = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissionsAsync.fulfilled, (state, action) => {
      state.missionData = action.payload.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      }));
    });
  },
});

export default missionsSlice.reducer;
