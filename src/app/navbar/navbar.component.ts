import { Component, inject } from '@angular/core';
import { FireAuthService } from '../services/fireauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  svcAuth = inject(FireAuthService);
  private router = inject(Router);

  async clickLogout(){
    await this.svcAuth.signOutUser();
    this.router.navigateByUrl('/login');
  }
}
