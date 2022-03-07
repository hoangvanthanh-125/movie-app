import { configureStore } from '@reduxjs/toolkit';
import { filmDataReducer } from './slice/FilmDataSlice';
import { uiReducer } from './slice/uiSlice';
import { userReducer } from './slice/userSlice';
const store = configureStore({
  reducer: {
    ui:uiReducer,
    filmData:filmDataReducer,
    user:userReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store