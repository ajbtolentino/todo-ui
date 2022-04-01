import { FilterBy, SetFilter } from "../actions/filter/FilterActionTypes";

export interface FilterState {
    filterBy: FilterBy;
};

const initialState: FilterState = {
    filterBy: "ALL"
};

export const FilterReducer = (state: FilterState = initialState, action: SetFilter) => {
    if(action.type === "SET_FILTER"){
        return {
            ...state,
            filterBy: action.payload
        };
    }

    return state;
};