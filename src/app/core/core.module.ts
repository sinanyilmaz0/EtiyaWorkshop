import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { IfNotDirective } from './directives/if-not.directive';
import { UnlessDirective } from './directives/unless.directive';


@NgModule({
  declarations: [
    IfNotDirective,
    UnlessDirective,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    IfNotDirective,
    UnlessDirective,
  ]
})
export class CoreModule { }
