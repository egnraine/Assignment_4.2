import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent 
{
  addPlayerForm = this.formBuilder.group
  ({
      last_name: '',
      first_name: '',
  });

  constructor
  (
    private taskService: TaskService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void 
  {

    const last_name = this.addPlayerForm.controls['last_name'].value;
    const first_name = this.addPlayerForm.controls['first_name'].value;
    
    // Process data here
    this.taskService.addPlayer(last_name, first_name).subscribe((response: any) =>
    {
      console.warn('Player has been added', this.addPlayerForm.value);
      this.addPlayerForm.reset();
    });
  }
}
