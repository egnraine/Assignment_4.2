import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';

import { HttpClientModule } from '@angular/common/http';
import { AddPlayerComponent } from './pages/add-player/add-player.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrelimViewComponent } from './pages/prelim-view/prelim-view.component';
import { FinalViewComponent } from './pages/final-view/final-view.component';
import { WorstViewComponent } from './pages/worst-view/worst-view.component';
import { ImpViewComponent } from './pages/imp-view/imp-view.component';
import { ClassViewComponent } from './pages/class-view/class-view.component';
import { EditPlayerComponent } from './pages/edit-player/edit-player.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    AddPlayerComponent,
    PrelimViewComponent,
    FinalViewComponent,
    WorstViewComponent,
    ImpViewComponent,
    ClassViewComponent,
    EditPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
