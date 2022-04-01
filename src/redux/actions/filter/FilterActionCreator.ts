import { FilterBy, SetFilter } from "./FilterActionTypes";

export const SetFilterAction = (payload: FilterBy): SetFilter => {
    return {
        type: "SET_FILTER",
        payload: payload
    };
};