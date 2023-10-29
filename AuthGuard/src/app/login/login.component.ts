import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }
  registerdata() {
    //storing data in localStorage
     localStorage.setItem("isLogin", "true");
     this._router.navigate(['/home']);
  }

   
   checkLogin() {
   let loginValue= localStorage.getItem("isLogin");
    if(loginValue){
      alert("You are logged in");
    }
    else{
      alert("You are not logged in, Please log in");
    }
   
  }
  ngOnInit(): void {
  }

}
