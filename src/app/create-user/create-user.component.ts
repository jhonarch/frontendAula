import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { CreateUserService } from './create-user.service';
import { UserModel } from './../model/user.model';
import { OK } from '../model/httpStatus';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [CreateUserService]
})
export class CreateUserComponent implements OnInit {

  private user: UserModel;
  private isValid: boolean = true;
  private message: string = "";

  constructor(private createUserService:CreateUserService, 
    private router:Router) { 
    this.user = new UserModel();

  }

  ngOnInit() {
  }

  public saveOrUpdate(): void{
    this.isValid = this.createUserService.validate(this.user);

    if(this.isValid){
      this.createUserService.saveOrUpdate(this.user).subscribe(rest => {
        if(rest.responseCode == OK){
          this.router.navigate(['/userComponent']);
        }else{
          this.message = rest.message;
          this.isValid = false;
        }
      });
    }else{
      this.message = "Los campos con * son obligarios";
    }
  }
}
