import { applyMiddleware, combineReducers, createStore } from "redux";
import { sampleReducer } from "../reducers/SampleReducer";
import { todoReducer } from "../reducers/TodoReducer";
import { RootState } from "./RootState";

const reducers = combineReducers<RootState>({
    sample: sampleReducer,
    todo: todoReducer
});

export const Store = createStore(reducers, applyMiddleware());