import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server-manager-front';

  constructor(private location: Location){}

  ngOnInit(): void {
    if(localStorage.getItem('token') === null || localStorage.getItem('token') === undefined){
      this.location.replaceState('/auth/login');
    }
  }
}
