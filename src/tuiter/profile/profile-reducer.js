import { createSlice } from "@reduxjs/toolkit";
import profile from './profile.json';

const profilesSlice = createSlice({
    name: 'profiles',
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            const id =  (new Date()).getTime()

            state.unshift({
                ...action.payload,
                _id: id,
            })

            state.splice(1, 1)
        },
    }

});

export const {updateProfile} = profilesSlice.actions;
export default profilesSlice.reducer;