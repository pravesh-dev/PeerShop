import { createSlice } from "@reduxjs/toolkit";

//  Check if there is any user data stored in localStorage
const storedUserData =localStorage.getItem('userData');
const storedToken = localStorage.getItem('token');
const storedUser = storedUserData ? JSON.parse(storedUserData) : null;

//  setting initial state to null if the user data is not stored in local storage
const initialState = {
  name: storedToken ? storedUser.name : "",
  loginStatus: storedToken ? true : false,
  activeProfileTab: 'profile'
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserName(state, action) {
      const { userName } = action.payload;
      state.name = userName;
      state.loginStatus = true;

    //   store the updated user data in localStorage
    localStorage.setItem('userData', JSON.stringify({name: userName}));
    },
    logoutUser(state) {
      state.name = "";
      state.loginStatus = false;

      // removing the user data and token from local storage
      localStorage.removeItem('token')
      localStorage.removeItem('userData')
    },
    changeActiveProfileTab(state, action){
      const { activeTab } = action.payload;
      state.activeProfileTab = activeTab;
    }
  },
});

export const { addUserName, logoutUser, changeActiveProfileTab } = userSlice.actions;
export default userSlice.reducer;
