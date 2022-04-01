import { applyMiddleware, combineReducers, createStore } from "redux";
import { FilterReducer } from "../reducers/FilterReducer";
import { SampleReducer } from "../reducers/SampleReducer";
import { TodoReducer } from "../reducers/TodoReducer";
import { RootState } from "./RootState";

const reducers = combineReducers<RootState>({
    sample: SampleReducer,
    todo: TodoReducer,
    filter: FilterReducer
});

export const Store = createStore(reducers, applyMiddleware());
