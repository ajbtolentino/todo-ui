import { SampleState } from "../reducers/sampleReducer";
import { TodoState } from "../reducers/todoReducer";

export interface RootState {
    sample: SampleState;
    todo: TodoState;
};