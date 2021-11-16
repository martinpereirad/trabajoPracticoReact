import { configureStore } from '@reduxjs/toolkit';
import globalReducer from '../components/global/global.slice';
import episodeDataReducer from '../components/dataEpisode/EpisodeData.slice';


export const store = configureStore({
    reducer: {
      global: globalReducer,
      episodeData: episodeDataReducer,
    },
  });
  