import React from "react";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";


export const deposit = (amount: number) => {
    return (dispatch : Dispatch<Action>) => {
        dispatch : ({
            type : ActionType.DEPOSIT,
            payload: amount
        })
    }
};
export const withdram = (amount: number) => {
    return (dispatch : Dispatch) => {
        dispatch : ({
            type : ActionType.WITHDRAW,
            payload: amount
        })
    }
};
export const bankrupt = (amount: number) => {
    return (dispatch : Dispatch) => {
        dispatch : ({
            type : ActionType.BANKRUPT,
        })
    }
};