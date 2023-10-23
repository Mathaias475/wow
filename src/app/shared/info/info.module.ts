import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';



@NgModule({
  declarations: [InfoComponent],
  exports: [InfoComponent],
  imports: [
    CommonModule
  ]
})
export class InfoModule { }
