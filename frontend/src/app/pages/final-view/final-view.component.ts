import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-final-view',
  templateUrl: './final-view.component.html',
  styleUrls: ['./final-view.component.css']
})
export class FinalViewComponent implements OnInit
{
  players: any;

  constructor(private taskService: TaskService) { }
  
  ngOnInit() 
  {    
    this.taskService.getFinal().subscribe((players: any) => 
      {
          this.players = players;
      })
  }
}
