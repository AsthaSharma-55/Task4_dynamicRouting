import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";
import { getUsers } from '../actions/useraction'

const userReducer = createSlice({        //CreateSlice:A function that accepts an initial state, an object of reducer functions, and a "slice name",
    name: "users",                      // and automatically generates action creators and action types that correspond to the reducers and state.
    initialState: {
        users: [],
        loader: false,
        errors: {}
    },
    reducers: {
       
        addUser: (state, action) => {
            console.log(action);
            state.users = [...state.users, action.payload]         // action.payload  by using action passing data in the reducer.
        }
    },
    extraReducers: {                                         //The reducers property both creates an action creator function and responds to that action in the slice reducer.
        [getUsers.pending]: (state, action) => {             // The extraReducers allows you to respond to an action in your slice reducer but does not create an action creator function.
            state.loader = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loader = false;
            state.users = action.payload;
            state.usersContainer = action.payload;
        },
        [getUsers.rejected]: (state, action) => {
            state.loader = false;
            state.errors = action.payload;
        },

    },

});
export const addUser = useReducer.actions;
export default userReducer.reducer;