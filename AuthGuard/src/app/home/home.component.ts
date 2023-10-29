import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { 
    
  }
  deRegisterdata() {
    //removing data from localStorage
     localStorage.removeItem("isLogin");
     this._router.navigate(['']);
  }

  ngOnInit(): void {
   
  }

}
