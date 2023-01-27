import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.css']
})
export class ClassViewComponent implements OnInit
{
  players: any;

  constructor(private taskService: TaskService) { }
  
  ngOnInit() 
  { 
    this.taskService.getClass().subscribe((players: any) => 
    {
        this.players = players;
    })
  }
}
