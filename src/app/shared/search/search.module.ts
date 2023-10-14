import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';


@NgModule({
  imports: [CommonModule],
  exports: [SearchComponent],
  declarations: [SearchComponent],
})
export class SearchModule { }
