import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit
{
  players: any;

  constructor(private taskService: TaskService) { }
  
  ngOnInit() 
  {
    this.taskService.getPlayers().subscribe((players: any) =>
      {
        this.players = players;
        // console.log(players);
      })
  }
}
