import {Injectable} from "@angular/core";
import {Effect, ofType, Actions} from "@ngrx/effects";
import {map, mergeMap, catchError} from "rxjs/operators";
import {environment} from "src/environments/environment";

import * as taskActions from "../actions/tasks.actions";

import { DataService} from "../../shared/data.service";
import { of } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class TasksEffect {
    constructor(
        private actions$:Actions,
        private httpRequest:DataService
    ){}

    @Effect() addTask = this.actions$.pipe(
        ofType<taskActions.AddTask>(taskActions.ETaskActions.AddTask),
        mergeMap(data=>
            this.httpRequest.setData(data.payload, environment.tasks).pipe(
                map(() => new taskActions.AddTaskSuccess(data.payload)),
                catchError(error=> of(new taskActions.AddTaskFailure(error)))
            )
        )
    ); 

    @Effect() getTasks = this.actions$.pipe(
        ofType<taskActions.TaskActions>(taskActions.ETaskActions.GetTasks),
        mergeMap(()=>
            this.httpRequest.getData(environment.tasks).pipe(
                map(data => new taskActions.GetTasksSuccess(data)),
                catchError(error=> of(new taskActions.GetTaskFailure(error)))
            )
        )
    ); 

    @Effect() editTask = this.actions$.pipe(
        ofType<taskActions.EditTask>(taskActions.ETaskActions.EditTask),
        mergeMap(data=>
            this.httpRequest.editData(data.payload, environment.tasks).pipe(
                map(() => new taskActions.EditTaskSuccess(data.payload)),
                catchError(error=> of(new taskActions.EditTaskFailure(error)))
            )
        )
    ); 

    @Effect() removeTask = this.actions$.pipe(
        ofType<taskActions.RemoveTask>(taskActions.ETaskActions.RemoveTask),
        mergeMap(data=>
            this.httpRequest.removeData(data.payload, environment.tasks).pipe(
                map(() => new taskActions.RemoveTaskSuccess(data.payload)),
                catchError(error=> of(new taskActions.RemoveTaskFailure(error)))
            )
        )
    ); 
}