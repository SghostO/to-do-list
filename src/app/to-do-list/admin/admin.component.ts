import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { TaskList } from 'src/app/store/state/tasks.state';
import { MatDialog } from '@angular/material';
import { ModifiedTask } from 'src/app/models/modify-task.model';
import { GetTasks, AddTask, EditTask, RemoveTask } from 'src/app/store/actions/tasks.actions';
import { Task } from 'src/app/models/task.interface';
import { DataService } from 'src/app/shared/data.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  tasks: TaskList;
  modify:ModifiedTask;
  modifying:boolean=false;

  constructor(
    private store:Store<AppState>,
    private httpRequest:DataService,
    public dialog: MatDialog
  ) { }


  ngOnInit() {
    this.httpRequest.checkUserData(true).then(()=>{
      console.log("admin");
    });
    this.selection();
  }


  selection(){
      this.store.dispatch(new GetTasks());
      this.store.select(store=> store.tasks).subscribe(state=>{
        this.tasks=state;
      });
  }


  openDialog(name:string, action:string, content?:string, id?:number): void {
    if(content){
      this.modify={id:id, name:name, task:content, action:action}
    }
    else{
      this.modify={id:id, name:name, task:"", action:action}
    }
    this.modifying=true;
  }


  action(action:string, id?:number){
    let data:Task;
    if(id){
      data={ id:id, content:this.modify.task}
    }
    else{
      data={ id:this.tasks.list.length+1, content:this.modify.task}
    }
    switch(action){
      case "Add":{
        this.addTask(data);
        break;
      }
      case "Edit":{
        this.editTask(data);
        break;
      }
    }
    this.closeDialog();
  }
  
  

  closeDialog(){
    this.modify={ id:undefined, name:"", task:"", action:""};
    this.modifying=false;
  }



  
  addTask(data:Task){
    this.store.dispatch(new AddTask(data));
  }

  editTask(task:Task){
    this.store.dispatch(new EditTask(task));
  }

  removeTask(id:number){
    this.store.dispatch(new RemoveTask(id));
  }
}
