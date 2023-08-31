import { configureStore } from "@reduxjs/toolkit";
import { User } from "../models";
import { userReducer } from "./actions";

export interface AppStore {
    user: User;
}

export const store = configureStore<AppStore>({
    reducer: {
        user: userReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
