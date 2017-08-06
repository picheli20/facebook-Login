import { Component } from '@angular/core';
import { OAuthService } from './oauth/oauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(public oauth: OAuthService) {
    oauth.handleAuthentication();
  }

  isLogged() {
    return this.oauth.isAuthenticated();
  }

  logout() {
    this.oauth.logout();
  }

  login() {
    this.oauth.login();
  }
}
