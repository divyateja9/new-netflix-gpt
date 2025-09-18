import {createSlice} from "@reduxjs/toolkit";
import reducer from "./userSlice";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        trailer:null
    },
    reducers:{
        setNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies= action.payload;
        },
        setPopularMovies:(state,action)=>{
            state.popularMovies= action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailer= action.payload;
        }
    }
})
export const {setNowPlayingMovies,addTrailerVideo,setPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;