import {ActionReducerMap} from "@ngrx/store";

import {routerReducer} from "@ngrx/router-store";
import {AppState} from "../state/app.state";
import {taskReducers} from "./task.reducers";

export const appReducers: ActionReducerMap<AppState, any> ={
    router: routerReducer,
    tasks: taskReducers
}