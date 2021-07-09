import { Component, OnInit } from '@angular/core';

import { UserService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  counter: number = 0;

  constructor(private userService: UserService, private  counterServise: CounterService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
    this.counter = this.counterServise.inactiveToActiveCounter;
  }
}
