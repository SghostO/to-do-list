import { NgModule } from '@angular/core';
import {MatButtonModule, MatButtonToggleModule, MatGridListModule, MatCardModule, MatDividerModule, MatListModule} from "@angular/material";
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';

const MaterialComponents=[
  MatButtonModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatGridListModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
]
@NgModule({
  declarations:[],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialsModule { }
