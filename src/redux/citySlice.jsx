import { createSlice } from '@reduxjs/toolkit'

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    value: '', 
  },
  reducers: {
    setCity: (state, action) => {
      state.value = action.payload
    },
    removeInputValue:(state)=>{
      state.value = ''
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCity ,removeInputValue} = citySlice.actions

export default citySlice.reducer