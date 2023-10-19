import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
id :number=0;
obj =[
  {
    id:1,
    name:'Robert',
    age:25
  },
  {
    id:2,
    name:'John',
    age:40
  },
  {
    id:3,
    name:'Bella',
    age:30
  },
  
]
  constructor(private ActivatedRoute: ActivatedRoute,private router: Router) { 
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
    this.id= this.ActivatedRoute.snapshot.params['id'];
      }
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
