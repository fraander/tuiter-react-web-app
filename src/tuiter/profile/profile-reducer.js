import { createSlice } from "@reduxjs/toolkit";
import profile from './profile.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.jpg",
};

const templateProfile = {
    firstName: "Frank",
    lastName: "Anderson",
    handle: "@fra_ander",
    profilePicture: "profile-frank.jpeg",
    bannerPicture: "shuttle.png",
    bio: "Developer and student. CS @ Northeastern.",
    website: "github.com/fraander",
    location: "Boston, MA",
    dateOfBirth: "2/7/2003",
    dateJoined: "6/2020",
    followingCount: 104,
    followersCount: 45,
    tuits: "6,114"
}


const profilesSlice = createSlice({
    name: 'profiles',
    initialState: profile,
    reducers: {
        createProfile(state, action) {
            state.unshift({
                ...action.payload,
                ...templateProfile,
                _id: (new Date()).getTime(),
            })
        },
        deleteProfile(state, action) {
            const index = state
                .findIndex(profile =>
                    profile._id === action.payload);
            state.splice(index, 1);
        },
    }

});

export const {createTuit, deleteTuit} = profilesSlice.actions;
export default profilesSlice.reducer;