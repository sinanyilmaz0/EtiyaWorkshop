import { Component, Input, OnInit } from '@angular/core';

import { CartService } from 'src/app/features/product/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  @Input() cartText!:number;
  
  ngOnInit(): void {
    this.getNumberOfProductInCard();
  }

  constructor(
    private cardService: CartService
  ) {}

  numberOfProductInCard:number = 0;

  getNumberOfProductInCard(){
    this.cardService.getList().subscribe((response) => {
      this.numberOfProductInCard = response.length;
    });
  }
  

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
