import {combineReducers} from "redux";
import {userReduser} from "./userReduser";


export const rootReducer = combineReducers({
    user: userReduser,
})

export type RootState = ReturnType<typeof rootReducer>