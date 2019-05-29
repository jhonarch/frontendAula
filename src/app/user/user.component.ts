import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { UserModel } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  //constructor() { }
  private users: Array<UserModel>
  constructor(private userService: UserService){}

  ngOnInit() {
    this.loadUser();
  }

  private loadUser(): void{
    this.userService.getUsers().subscribe( res => {
      this.users = res;
      //console.log(this.user);
    }); 
  }

}
