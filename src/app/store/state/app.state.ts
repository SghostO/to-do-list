import {RouterReducerState} from "@ngrx/router-store";

import {TaskList, initialTaskState} from "./tasks.state";

export interface AppState{
    router?: RouterReducerState;
    tasks:TaskList;
}

export const initialAppState: AppState={
    tasks:initialTaskState
}

export function getInitialState():AppState{
    return initialAppState;
}