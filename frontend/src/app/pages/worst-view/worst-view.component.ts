import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-worst-view',
  templateUrl: './worst-view.component.html',
  styleUrls: ['./worst-view.component.css']
})
export class WorstViewComponent implements OnInit
{
  players: any;

  constructor(private taskService: TaskService) { }
  
  ngOnInit() 
  {    
    this.taskService.getWorst().subscribe((players: any) => 
    {
        this.players = players;
        // console.log(players);
    })
  }
}
