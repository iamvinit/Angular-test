import { Injectable } from '@angular/core';


import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';


@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders() {
  	 return LEADERS;
  }

  getLeader(id: number){
  	return LEADERS.filter( (leader) => (leader.id === id))[0];
  }

  getFeaturedLeader() {
  	return LEADERS.filter( (leader) => (leader.featured))[0];
  }

}
