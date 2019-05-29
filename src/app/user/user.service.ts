import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
import { UserModel } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private user: Array<UserModel>
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>("http://localhost:8080/getUsers");
  }
  /*
  public getUsers(): Array<UserModel>{
    this.http.get("http://localhost:8080/getUsers").subscribe(res => {
      this.user = res as UserModel[];
      console.log(this.user);
    });

    return this.user;
  }
  */

}
