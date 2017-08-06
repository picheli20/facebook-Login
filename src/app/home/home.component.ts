import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from '../oauth/oauth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private oauth: OAuthService, private router: Router) { }

  ngOnInit() {
    if(this.oauth.isAuthenticated()) {
      this.router.navigate(['/profile']);
    }
  }
}
