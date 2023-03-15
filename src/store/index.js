import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersreducer";
export default configureStore({
    reducer:{                         //REDUCER: In redux, the reducers are the pure functions that contain the logic and calculation that needed to be performed on the state.
        users:usersReducer,
    },
    middleware:[...getDefaultMiddleware()], // getDefaultMiddleware is useful if you want to add some custom middleware, 
                                             //but also still want to have the default middleware added as well:
})
