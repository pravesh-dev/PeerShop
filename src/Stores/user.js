import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserName(state, action){
            const {userName} = action.payload;
            state.name = userName;
        }
    }
})

export const { addUserName } = userSlice.actions;
export default userSlice.reducer;