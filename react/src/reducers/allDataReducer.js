import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function allDataReducer(state = initialState.allData, action) {

    switch(action.type) {
        case types.GET_ALL_DATA:
        //Object.assign() is added to aviod redux state mutation
        return  action.allData;
        default:
            return state;
    }
}