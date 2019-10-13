import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.interface';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
    providedIn:"root"
})
export class DataService{
    online:boolean=false;

    constructor(
        private http:HttpClient,
        private router:Router
    ){}
    

    checkUserData(admin?:boolean){
        return new Promise(resolve=>{
            this.getData(environment.online).subscribe(resp=>{

                if(admin){
                    if(!resp.id || resp.role!=="admin"){
                        this.router.navigate(["dashboard"]);
                    }
                    else{
                        this.online=true;
                        resolve()}
                }

                else{
                    if(!resp.id){
                        this.router.navigate(["auth"]);
                    }
                    else{
                        this.online=true;
                        resolve()
                    }
                }
            })
        })
    }

    getData(url:string):Observable<any>{
        console.log("get");
        return this.http.get(url);
    }

    setData(data:Task|User, url:string){
        console.log("set");
        return this.http.post(url, data);
    }

    editData(data:Task, url:string){
        console.log('update');
        return this.http.put(url+'/'+data.id, data);
    }

    removeData(id:number, url:string){
        console.log('delete');
        return this.http.delete(url+'/'+id)
    }

    editUserData(data:User, url:string){
        console.log('update user');
        return this.http.put(url, data);
    }

    logOut(){
        let outUser:User={id:null,role:null}
        this.editUserData(outUser, environment.online).subscribe(resp=>{
            this.online=false;
            this.router.navigate(["auth"]);
        })
    }

}