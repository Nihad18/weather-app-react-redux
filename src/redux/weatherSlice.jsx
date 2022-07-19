import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const key = "e086fba7db3e41548d855430222906";
//action
export const fetchWeatherAction = createAsyncThunk(
  "weather/fetch",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        // ` http://api.weatherapi.com/v1/current.json?key=${key}&q=${payload}`
        `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${payload}&days=10&aqi=no&alerts=no`
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//slice

const weatherSlice = createSlice({
  name: "weather",
  initialState: {},
  extraReducers: (builder) => {
    //pending
    builder.addCase(fetchWeatherAction.pending, (state, action) => {
      state.loading = true;
    });
    //fulfilled
    builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
      state.weather = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    //rejected
    builder.addCase(fetchWeatherAction.rejected, (state, action) => {
      state.loading = false;
      state.weather = undefined;
      state.error = action?.payload;
    });
  },
});

export default weatherSlice.reducer;
