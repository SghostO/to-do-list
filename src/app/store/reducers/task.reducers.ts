import {ETaskActions, TaskActions} from "../actions/tasks.actions";
import {initialTaskState, TaskList} from "../state/tasks.state";

export const taskReducers = (
    state = initialTaskState,
    action:TaskActions
): TaskList =>{
    switch (action.type) {
        case ETaskActions.GetTasks:{
            return {
                ...state
            };
        }

        case ETaskActions.GetTasksSuccess:{
            return {
                ...state,
                list:action.payload
            };
        }

        case ETaskActions.GetTaskFailure:{
            return {
                ...state,
                error:action.payload
            };
        }

        case ETaskActions.AddTask:{
            return {
                ...state
            }
        }
        case ETaskActions.AddTaskSuccess:{
            return {
                ...state,
                list:[...state.list, action.payload],
            }
        }

        case ETaskActions.AddTaskFailure:{
            return {
                ...state,
                error:action.payload,
            }
        }

        case ETaskActions.EditTask:{
            return {
                ...state
            };
        }

        case ETaskActions.EditTaskSuccess:{
            let task=state.list.findIndex(value=> value.id==action.payload.id);
            state.list[task]=action.payload;
            return {
                ...state
            };
        }

        case ETaskActions.EditTaskFailure:{
            return {
                ...state,
                error:action.payload
            };
        }

        case ETaskActions.RemoveTask:{
            return {
                ...state
            };
        }

        case ETaskActions.RemoveTaskSuccess:{
            return {
                ...state,
                list:state.list.filter(value=>{console.log(value); return value.id!==action.payload})
            };
        }

        case ETaskActions.RemoveTaskFailure:{
            return {
                ...state,
                error:action.payload
            };
        }

        default:
            return state;
    }
}