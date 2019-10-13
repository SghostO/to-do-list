import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/models/task.interface';

@Component({
  selector: 'app-item',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input() data:Task
  constructor() { }

  @Output() public editTask = new EventEmitter();
  @Output() public deleteTask = new EventEmitter();

  ngOnInit() {
  }

  edit(){
    this.editTask.emit(true);
  }

  delete(){
    this.deleteTask.emit(true);
  }

}
