import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { IfNotDirective } from './directives/if-not.directive';
import { JwtModule } from '@auth0/angular-jwt';
import { NgModule } from '@angular/core';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [
    IfNotDirective,
    UnlessDirective,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: () => {
          return localStorage.getItem("token");
        }
      }
    })
  ],
  exports: [
    IfNotDirective,
    UnlessDirective,
  ]
})
export class CoreModule { }
