import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit
{  
  data: any;
  
  ngOnInit()
  {
    this.route.params.subscribe((params: Params) =>
    {
      console.log(params['playerId']);

      this.data = params['playerId'];
    }
    )  
  }
  
  editPlayerForm = this.formBuilder.group
  ({
      last_name: '',
      first_name: '',
      hometown: '',
      classYear: '',
      p_time: 0, 
      f_time: 0,
      imp: '', 
      event: ''
  });
  
  constructor
  (
    private taskService: TaskService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  onSubmit(): void 
  {
    const _id = this.data;
    const last_name = this.editPlayerForm.controls['last_name'].value;
    const first_name = this.editPlayerForm.controls['first_name'].value;
    const hometown = this.editPlayerForm.controls['hometown'].value;
    const classYear = this.editPlayerForm.controls['classYear'].value;
    const p_time = this.editPlayerForm.controls['p_time'].value;
    const f_time = this.editPlayerForm.controls['f_time'].value;
    const imp = this.editPlayerForm.controls['imp'].value;
    const event = this.editPlayerForm.controls['event'].value;
    
    // Process data here
    this.taskService.updatePlayer(_id, last_name, first_name, hometown, classYear, p_time, f_time, imp, event).subscribe((response: any) =>
    {
      console.warn('Player has been added', this.editPlayerForm.value);
      this.editPlayerForm.reset();
    });
  }

  onDelete() 
  {
    const _id = this.data;

    this.taskService.deletePlayer(_id).subscribe(() =>
    {
        console.log("Player Deleted.")
    })
  }
}
