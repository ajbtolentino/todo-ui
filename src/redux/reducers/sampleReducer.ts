import { Action } from "redux";

export interface SampleState {
    greeting: string;
};

const initialState: SampleState = {
    greeting: "Hello world!"
};

export const SampleReducer = (state: SampleState = initialState, action: Action) => {
    return state;
}