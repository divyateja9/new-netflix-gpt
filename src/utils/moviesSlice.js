import {createSlice} from "@reduxjs/toolkit";
import reducer from "./userSlice";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies:null,
        trailer:null
    },
    reducers:{
        setNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies= action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailer= action.payload;
        }
    }
})
export const {setNowPlayingMovies,addTrailerVideo} = moviesSlice.actions;
export default moviesSlice.reducer;