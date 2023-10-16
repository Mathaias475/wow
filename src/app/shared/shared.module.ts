import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { HeaderModule } from './header/header.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { SearchModule } from './search/search.module';
import { LoadingModule } from './loading/loading.module';



@NgModule({
  exports: [ButtonModule, HeaderModule, TooltipModule, SearchModule, LoadingModule],
  imports: [ButtonModule, HeaderModule, TooltipModule, SearchModule, LoadingModule],
})
export class SharedModule { }
