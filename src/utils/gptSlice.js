import {createSlice} from '@reduxjs/toolkit';
const gptSlice = createSlice({
    name: 'gpt',
    initialState:{  
        showGptSearch:false,
        gptMovies:null,
        movieNames:null
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch= !state.showGptSearch;
        },
        setGptMovies:(state,action)=>{
state.movieNames= action.payload.movieNames;
            state.gptMovies= action.payload.allMovies;
        }
    }
})
export const {toggleGptSearchView,setGptMovies} = gptSlice.actions;
export default gptSlice.reducer;
