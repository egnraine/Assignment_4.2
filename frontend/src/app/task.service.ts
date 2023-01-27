import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService 
{
  constructor(private WebReqService: WebRequestService) { }

  addPlayer(last_name: string|null, first_name: string|null)
  {
    // Add player given input - web request
    return this.WebReqService.post('post', { last_name, first_name })
  }

  getPlayers()
  {
    return this.WebReqService.get('getAll');
  }

  getId(playerId: string)
  {
    return playerId;
  }

  updatePlayer(_id: number, last_name: string|null, first_name: string|null, hometown: string|null, 
  classYear: string|null, p_time: number|null, f_time: number|null, imp: string|null, 
  event: string|null)
  {
    return this.WebReqService.patch(`update/${_id}`, { last_name, first_name, hometown, 
    classYear, p_time, f_time, imp, event });
  }
  
  deletePlayer(playerId: string)
  {
    return this.WebReqService.delete(`delete/${playerId}`);
  }

  
  // 5 Queries

  getPrelim()
  {
    return this.WebReqService.get('getPrelim');
  }

  getFinal()
  {
    return this.WebReqService.get('getFinal');
  }

  getWorst()
  {
    return this.WebReqService.get('getWorst');
  }

  getImp()
  {
    return this.WebReqService.get('getImp');
  }

  getClass()
  {
    return this.WebReqService.get('getClass');
  }

}
