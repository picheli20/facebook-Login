import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OAuthService } from '../oauth/oauth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(private oauth: OAuthService, public router: Router) { }

  ngOnInit() {
    if(!this.oauth.isAuthenticated()) {
      this.router.navigate(['/']);
      return;
    }

    if (this.oauth.userProfile) {
      this.profile = this.oauth.userProfile;
    } else if (this.oauth.isAuthenticated()) {
      this.oauth.getProfile((err, profile) => this.profile = profile);
    }
  }

  login() {
    this.oauth.login();
  }

  logout() {
    this.oauth.logout();
  }
}
