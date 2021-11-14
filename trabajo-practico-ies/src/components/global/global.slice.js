import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  position: 0,
  episodeList: [],
  user: null,
};


export const globalSlice = createSlice({
  name: 'global',
  initialState,
 
  reducers: {
    start: (state) => {
      state.position = 0;
    },
    next: (state) => {
      console.log("=============== > next")
      state.position += 1;
    },
    prev: (state) => {
      console.log("< =============== prev")
      state.position -= 1;
    },
    addToList: (state, action) => {
      console.log("=============== addToList ==============", action)
      state.episodeList.push(action.payload);
    },
    setUser: (state, action) => {
      state.user = {...action.payload};
    },
    cleanUser: (state) => {
      state.user = null;
    },
  },

});

export const { start, next, prev, addToList, setUser, cleanUser } = globalSlice.actions;


export default globalSlice.reducer;