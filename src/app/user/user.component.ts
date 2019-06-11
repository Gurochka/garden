import { Component } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class AppUser {
  private users:User[];

  constructor(private userService: UserService) {
    
    this.userService.getAll().subscribe((res : User[]) => {
      this.users = res;
      console.log('Ive got all users!', this.users);
    })
  }

}
