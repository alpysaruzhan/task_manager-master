import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router){}
  goTask(){
    this.router.navigate(['tasks']);
  }

  ngOnInit(): void {
  }
  
}
