import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./tuits-service"

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits',
    async () =>
        await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
    }
)


const currentUser = {
    "username": "NASA",
    "handle": "@nasa",
    "image": "nasa.jpg",
}

const templateTuit = {
    ...currentUser,
    "time": "2h",
    "liked": false,
    "disliked": false,
    "dislikes": 0,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
        await service.createTuit(
            {...templateTuit, ...tuit}
        )
        return tuit
    }
)

export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) => {
            await service.updateTuit(tuit)
            return tuit
        }
    )