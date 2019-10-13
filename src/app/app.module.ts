import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TasksEffect } from './store/effects/task.effects';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    ToDoListModule,
    StoreModule.forRoot(appReducers),
    HttpClientModule,
    EffectsModule.forRoot([TasksEffect]),
  ],
  providers: [forwardRef(() => TasksEffect)],
  bootstrap: [AppComponent]
})
export class AppModule { }
