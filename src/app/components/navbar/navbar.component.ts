import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navItems : any[] = [
    {
      name: "Home",
      routerLink : "/",
      isRouterActiveExact: true
    },
    {
      name: "Login",
      routerLink : "/login",
      isRouterActiveExact: false
    },
  ];
}
