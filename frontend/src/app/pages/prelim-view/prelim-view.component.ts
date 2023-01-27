import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-prelim-view',
  templateUrl: './prelim-view.component.html',
  styleUrls: ['./prelim-view.component.css']
})
export class PrelimViewComponent implements OnInit
{
  players: any;

  constructor(private taskService: TaskService) { }
  
  ngOnInit() 
  {    
    this.taskService.getPrelim().subscribe((players: any) => 
      {
          this.players = players;
      })
  }
}
