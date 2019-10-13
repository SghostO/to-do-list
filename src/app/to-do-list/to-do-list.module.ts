import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { MaterialsModule } from '../materials/materials.module';
import { ItemsComponent } from './items/items.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

const ListComponents=[
  DashboardComponent,
  AdminComponent,
  ItemsComponent
]
@NgModule({
  declarations: [
    ListComponents,
  ],
  imports:[
    MaterialsModule, 
    BrowserModule, 
    FormsModule,
    HttpClientModule
  ]
})
export class ToDoListModule { }
