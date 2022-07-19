import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import citySlice from "./citySlice";
import weatherSlice from "./weatherSlice";

export default configureStore({
  reducer: {
    weather: weatherSlice,
    toggle: toggleSlice,
    city: citySlice,
  },
});
