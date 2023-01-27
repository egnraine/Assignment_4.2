import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './pages/add-player/add-player.component';
import { ClassViewComponent } from './pages/class-view/class-view.component';
import { EditPlayerComponent } from './pages/edit-player/edit-player.component';
import { FinalViewComponent } from './pages/final-view/final-view.component';
import { ImpViewComponent } from './pages/imp-view/imp-view.component';
import { PrelimViewComponent } from './pages/prelim-view/prelim-view.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { WorstViewComponent } from './pages/worst-view/worst-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'players', pathMatch: 'full' },
  { path: 'add-player', component: AddPlayerComponent }, 
  { path: 'players', component: TaskViewComponent},
  { path: 'players/:playerId', component: EditPlayerComponent},
  { path: 'prelim', component: PrelimViewComponent},
  { path: 'final', component: FinalViewComponent},
  { path: 'worst', component: WorstViewComponent},
  { path: 'imp', component: ImpViewComponent},
  { path: 'class', component: ClassViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
