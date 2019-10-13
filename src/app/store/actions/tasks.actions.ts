import {Action} from "@ngrx/store";

import {Task} from "../../models/task.interface";

export enum ETaskActions{
    GetTasks="[Task] Get Tasks",
    GetTasksSuccess='[Task] Get Tasks Success',
    GetTaskFailure="[Task] Get Task Failure",
    AddTask="[Task] Add Task",
    AddTaskSuccess='[Task] Add Task Success',
    AddTaskFailure="[Task] Add Task Failure",
    EditTask="[Task] Edit Task",
    EditTaskSuccess='[Task] Edit Task Success',
    EditTaskFailure="[Task] Edit Task Failure",
    RemoveTask="[Task] Remove Task",
    RemoveTaskSuccess='[Task] Remove Task Success',
    RemoveTaskFailure="[Task] Remove Task Failure",
}

export class GetTasks implements Action{
    public readonly type = ETaskActions.GetTasks;
}

export class GetTasksSuccess implements Action{
    public readonly type=ETaskActions.GetTasksSuccess;
    constructor(public payload:Array<Task>){}
}

export class GetTaskFailure implements Action{
    public readonly type=ETaskActions.GetTaskFailure;
    constructor(public payload:string){}
}

export class AddTask implements Action{
    public readonly type=ETaskActions.AddTask;
    constructor(public payload:Task){}
}

export class AddTaskSuccess implements Action{
    public readonly type=ETaskActions.AddTaskSuccess;
    constructor(public payload:Task){}
}

export class AddTaskFailure implements Action{
    public readonly type=ETaskActions.AddTaskFailure;
    constructor(public payload:string){}
}

export class EditTask implements Action{
    public readonly type = ETaskActions.EditTask;
    constructor(public payload:Task){}
}

export class EditTaskSuccess implements Action{
    public readonly type=ETaskActions.EditTaskSuccess;
    constructor(public payload:Task){}
}

export class EditTaskFailure implements Action{
    public readonly type=ETaskActions.EditTaskFailure;
    constructor(public payload:string){}
}

export class RemoveTask implements Action{
    public readonly type = ETaskActions.RemoveTask;
    constructor(public payload:number){}
}

export class RemoveTaskSuccess implements Action{
    public readonly type=ETaskActions.RemoveTaskSuccess;
    constructor(public payload:number){}
}

export class RemoveTaskFailure implements Action{
    public readonly type=ETaskActions.RemoveTaskFailure;
    constructor(public payload:string){}
}


export type TaskActions = AddTask 
| AddTaskSuccess 
| AddTaskFailure

| GetTasksSuccess 
| GetTasks 
| GetTaskFailure

| EditTaskSuccess 
| EditTask
| EditTaskFailure

| RemoveTaskSuccess 
| RemoveTask
| RemoveTaskFailure

