import { Component, OnInit} from '@angular/core';
import { GetTasks } from 'src/app/store/actions/tasks.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { TaskList } from 'src/app/store/state/tasks.state';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tasks: TaskList;
  constructor(
    private store:Store<AppState>,
    private httpRequest:DataService
  ) { }

  ngOnInit() {
    this.httpRequest.checkUserData(false).then(()=>{
      console.log("dashboard");
    });
    this.store.dispatch(new GetTasks());
      this.store.select(store=> store.tasks).subscribe(state=>{
      this.tasks=state;
    });
  }

}
