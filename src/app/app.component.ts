import { Component } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-list';
  checked:boolean=true;

  constructor(
    private httpRequest:DataService
  ){}

  checking(){
    this.checked=false;
    setTimeout(()=>{this.checked=true}, 1300);
  }
}
