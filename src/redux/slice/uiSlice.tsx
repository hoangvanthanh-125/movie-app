import { createSlice } from "@reduxjs/toolkit";
interface UI {
  openSidebar:boolean,
  openSearch:boolean,
  openOverlay:boolean
}
const initialState = {
  openSidebar:false,
  openSearch:false,
  openOverlay:false
} as UI

const uiSlice = createSlice({
  name:'uiSlice',
  initialState,
  reducers:{
  toggleSidebar:(state) => {
    state.openSidebar = !state.openSidebar
  },
  toggleSearch:(state) => {
    state.openSearch = !state.openSearch
  },
  openOverlay:(state) => {
    state.openOverlay = true;
  },
  closeOverlay:(state) => {
    state.openOverlay = false;
  }

  }

})
export const {reducer:uiReducer} = uiSlice;
export const {actions:uiActions} = uiSlice;