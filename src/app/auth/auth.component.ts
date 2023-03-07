import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  type = this.route.snapshot.paramMap.get('type');

  username: String = "";
  password: String = "";

  ngOnInit(): void {
    
  }

  /**
   * Login
   */
  async login(){
    const user = await this.authService.login(this.username, this.password);
    if(user.token !== undefined){
      localStorage.setItem('token', user.token);
    }
  }

}
