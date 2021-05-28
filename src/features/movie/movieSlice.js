import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recomends: [],
    new: [],
    originals: [],
    trending: []
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recomends = action.payload.recomends;
            state.new = action.payload.new;
            state.originals = action.payload.originals;
            state.trending = action.payload.trending;
        }
    }
})

export const { setMovies } = movieSlice.actions;

export const selectRecomends = state => state.movie.recomends;
export const selectNew = state => state.movie.new;
export const selectOriginals = state => state.movie.originals;
export const selectTrending = state => state.movie.trending;

export default movieSlice.reducer;