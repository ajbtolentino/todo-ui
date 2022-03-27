import { SampleState } from "../reducers/SampleReducer";
import { TodoState } from "../reducers/TodoReducer";

export interface RootState {
    sample: SampleState;
    todo: TodoState;
};