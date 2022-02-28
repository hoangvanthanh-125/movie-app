import { configureStore } from '@reduxjs/toolkit';
import { filmDataReducer } from './slice/FilmDataSlice';
import { uiReducer } from './slice/uiSlice';
const store = configureStore({
  reducer: {
    ui:uiReducer,
    filmData:filmDataReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store