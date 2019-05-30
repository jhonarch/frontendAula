import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
import { UserModel } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private user: Array<UserModel>
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>("http://localhost:8080/getUsers");
  }
 
  public deleteUser(user: UserModel): void{
    this.http.post("http://localhost:8080/deleteUser", JSON.stringify(user)).subscribe();
    this.getUsers();
  }
}
