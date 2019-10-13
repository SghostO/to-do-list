import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private httpRequest:DataService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  login(id:string, newOne:boolean, role:string="User"){
    let user:User={ id:id, role:role}

    if(newOne){
      this.httpRequest.setData(user, environment.users).subscribe(resp=>{
        this.httpRequest.editUserData(user, environment.online).subscribe(resps=>{
          this.router.navigate(["dashboard"]);
        })
      })
    }

    else{
      this.httpRequest.getData(environment.users).subscribe(resp =>{
        let responce:Array<User> = resp as Array<User>;
        let exist=responce.find(value=> value.id==user.id);
        if(exist.id){
          this.httpRequest.editUserData(exist, environment.online).subscribe(resps=>{
            if(exist.role=="admin"){
              this.router.navigate(["admin"]);
            }
            else{
              this.router.navigate(["dashboard"]);
            }
          })
        }
      })
    }
  }

}
