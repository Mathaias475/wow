import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { HeaderModule } from './header/header.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { SearchModule } from './search/search.module';



@NgModule({
  exports: [ButtonModule, HeaderModule, TooltipModule, SearchModule],
  imports: [ButtonModule, HeaderModule, TooltipModule, SearchModule],
})
export class SharedModule { }
