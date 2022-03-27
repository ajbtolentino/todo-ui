import { applyMiddleware, combineReducers, createStore } from "redux";
import { sampleReducer } from "../reducers/sampleReducer";
import { todoReducer } from "../reducers/todoReducer";
import { RootState } from "./rootState";

const reducers = combineReducers<RootState>({
    sample: sampleReducer,
    todo: todoReducer
});

export const Store = createStore(reducers, applyMiddleware());