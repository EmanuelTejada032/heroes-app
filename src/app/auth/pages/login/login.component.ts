import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authServices: AuthService) { }

  ngOnInit(): void {
  }
  
  onLoginClick(){
    this.authServices.login()
        .subscribe( user => {
          (user.id)? this.router.navigate(["/heroes"]): null;
        })
    
  }
  withoutLoginClick(){
    this.authServices.logout()
    this.router.navigate(["/heroes"])
  }

}
