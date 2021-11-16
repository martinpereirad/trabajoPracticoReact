import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    episodeData: {
        id: 1,
        name: "hola",
        air_date: "como estas",
        episode: "yo muy bien",
    }
}


export const loadEpisodeData = createAsyncThunk(
    'episodeData/load',
    async (id) => {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
      // The value we return becomes the `fulfilled` action payload
      if(response.status === 200) {
        return response.data;
      } else {
        return null;
      }
    }
);

export const saveEpisode = createAsyncThunk(
    'episodeData/saveEpisode',
    async (episode) => {
      const response = await axios.post(`https://rickandmortyapi.com/api/episode`, {
        body: JSON.stringify(episode),
      });
      // The value we return becomes the `fulfilled` action payload
      if(response.status === 200) {
        return response.data;
      } else {
        return null;
      }
    }
  );
  

export const episodeData = createSlice({
    name: 'episodeData',
    initialState,
    reducers: {
      addEpisodeData: (state, action) => {
        state.episodeData = action.payload;
      },
      cleanEspisodeData: (state) => {
        console.log("clean episode data")
        state.episodeData = {
          ...initialState.episodeData
        };
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(loadEpisodeData.pending, (state) => {
          console.log("loading....")
          state.status = 'loading';
        })
        .addCase(loadEpisodeData.fulfilled, (state, action) => {
          console.log("DONE")
          state.status = 'done';
          state.episodeData = action.payload;
        })
        .addCase(loadEpisodeData.rejected, (state) => {
          state.status = 'fail';
        })
        .addCase(saveEpisode.pending, (state) => {
          state.status = "loading"
        })
        .addCase(saveEpisode.fulfilled, (state, action) => {
          state.status = "done"
          state.id = action.payload;
        })
    },
});

export const { addEpisodeData, cleanEpisodeData } = episodeData.actions;


export default episodeData.reducer;