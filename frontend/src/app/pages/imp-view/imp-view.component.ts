import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-imp-view',
  templateUrl: './imp-view.component.html',
  styleUrls: ['./imp-view.component.css']
})
export class ImpViewComponent implements OnInit
{
  players: any;

  constructor(private taskService: TaskService) { }
  
  ngOnInit() 
  {    
    this.taskService.getImp().subscribe((players: any) => 
    {
        this.players = players;
    })
  }
}
