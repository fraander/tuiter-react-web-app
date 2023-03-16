import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}


const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.jpg",
}

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "disliked":false,
    "dislikes":0,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]: (state) => {
            state.loading = true
            state.tuits = []
        },
        [findTuitsThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.tuits = payload
        },
        [findTuitsThunk.rejected]: (state) => {
            state.loading = false
        },
        [deleteTuitThunk.fulfilled] : (state, {payload}) => {
            state.loading = false
            state.tuits = state.tuits.filter(t => t._id !== payload)
        },
        [createTuitThunk.fulfilled] : (state, {payload}) => {
            state.loading = false
            console.log()
            state.tuits.push({...templateTuit, ...payload})
        },
        [updateTuitThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            // FIXME: payload is undefined despite right value being passed in the rest of it
            // TODO: Dislike counter
            const tuitNdx = state.tuits
                .findIndex((t) => t._id === payload._id)
            state.tuits[tuitNdx] = {
                ...state.tuits[tuitNdx],
                ...payload
            }
        }
    }
});

export default tuitsSlice.reducer;