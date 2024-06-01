import { createSlice } from "@reduxjs/toolkit";

//  Check if there is any user data stored in localStorage
const storedUserData =localStorage.getItem('userData');
const storedUser = storedUserData ? JSON.parse(storedUserData) : null;

//  setting initial state to null if the user data is not stored in local storage
const initialState = {
  name: storedUser ? storedUser.name : "",
  loginStatus: storedUser ? true : false,
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
    localStorage.setItem('userData', JSON.stringify({name: userName, loginStatus: true}));
    },
    logoutUser(state) {
      state.name = "";
      state.loginStatus = false;

      // removing the user data from local storage
      localStorage.removeItem('userData')
    },
  },
});

export const { addUserName, logoutUser } = userSlice.actions;
export default userSlice.reducer;
