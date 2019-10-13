import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './to-do-list/dashboard/dashboard.component';
import { AdminComponent } from './to-do-list/admin/admin.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  {path:"", redirectTo:"auth", pathMatch:"full"},
  {path:"auth", component:AuthComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"admin", component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
