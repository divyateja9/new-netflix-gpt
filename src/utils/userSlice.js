import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({ 
    name: "user",   
    initialState: null,
    reducers: { 

        setUserInfo: (state, action) => {
           return action.payload;
        },
        removeUserInfo: (state) => {
            return null;
        }
    }
});   
export default userSlice.reducer;
export const {setUserInfo, removeUserInfo} = userSlice.actions;
