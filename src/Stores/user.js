import { createSlice } from "@reduxjs/toolkit";

//  Check if there is any user data stored in localStorage
const storedUserData =localStorage.getItem('userData');
const storedToken = localStorage.getItem('token');
const storedUser = storedUserData ? JSON.parse(storedUserData) : null;

//  setting initial state to null if the user data is not stored in local storage
const initialState = {
  name: storedToken ? storedUser.name : "",
  email: storedToken ? storedUser.email : "",
  contact: storedToken ? storedUser.contact : "",
  loginStatus: storedToken ? true : false,
  activeProfileTab: 'profile',
  isAccSetting: false,
  isAddAddress: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserName(state, action) {
      const { userName, userEmail, userContact } = action.payload;
      state.name = userName;
      state.email = userEmail;
      state.contact = userContact;
      state.loginStatus = true;

    //   store the updated user data in localStorage
    localStorage.setItem('userData', JSON.stringify({name: userName, email: userEmail, contact: userContact}));
    },
    logoutUser(state) {
      state.name = "";
      state.email = "";
      state.contact = "";
      state.loginStatus = false;

      // removing the user data and token from local storage
      localStorage.removeItem('token')
      localStorage.removeItem('userData')
    },
    changeActiveProfileTab(state, action){
      const { activeTab } = action.payload;
      state.activeProfileTab = activeTab;
    },
    setIsAccSetting(state, action){
      const { accSetting } = action.payload;
      state.isAccSetting = accSetting;
    },
    setIsAddAddress(state, action){
      const { addAddress } = action.payload;
      state.isAddAddress = addAddress;
    }
  },
});

export const { addUserName, logoutUser, changeActiveProfileTab, setIsAccSetting, setIsAddAddress} = userSlice.actions;
export default userSlice.reducer;
