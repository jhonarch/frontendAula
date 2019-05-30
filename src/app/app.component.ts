import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-aula-app';
 
  constructor(private router: Router){
  }

  ngOnInit() {
  }


  public createUser(): void{
    sessionStorage.clear();
    this.router.navigate(['/createUserComponent']);
  }
}
