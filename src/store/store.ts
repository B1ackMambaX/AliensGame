import { configureStore } from "@reduxjs/toolkit";
import game from "./gameSlice";

const store = configureStore({
    reducer: game,
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;
export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;