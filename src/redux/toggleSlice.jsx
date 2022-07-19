import { createSlice } from '@reduxjs/toolkit'

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    value: true,
  },
  reducers: {
    setToggle: (state) => {
     state.value=!state.value;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToggle } = toggleSlice.actions

export default toggleSlice.reducer