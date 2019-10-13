import {Task} from "../../models/task.interface";

export interface TaskList{
    list:Array<Task>;
    error:string;
}

export const initialTaskState: TaskList={
    list:[],
    error:null
};