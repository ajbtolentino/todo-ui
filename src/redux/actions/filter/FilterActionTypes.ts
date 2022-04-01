import { Action } from "redux";

export type FilterBy = "ALL" | "COMPLETED" | "PENDING";

export interface SetFilter extends Action {
    type: "SET_FILTER";
    payload: FilterBy
};