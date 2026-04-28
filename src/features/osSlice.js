import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apps: {
    about: { isOpen: false, isMinimized: false },
    projects: { isOpen: false, isMinimized: false },
    contact: { isOpen: false, isMinimized: false },
    terminal: { isOpen: false, isMinimized: false },
  },
  activeApp: null,
};

const osSlice = createSlice({
  name: "os",
  initialState: initialState,
  reducers: {
    opneApp: (state, action) => {
      const appId = action.payload;
      state.apps[appId].isOpen = true;
      state.apps[appId].isMinimized = false;
      state.activeApp = appId;
    },
    closeApp: (state, action) => {
      state.apps[action.payload].isOpen = false;
      state.activeApp = null;
    },
    minimize: (state, action) => {
      state.apps[action.payload].isMinimized = true;
      state.activeApp = null;
    },
    setFocus: (state, action) => {
      state.activeApp = action.payload;
      state.apps[action.payload].isMinimized = false;
    },
  },
});

export const { opneApp, closeApp, minimize, setFocus } = osSlice.actions;
export default osSlice.reducer;
