import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [InfoComponent],
  exports: [InfoComponent],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class InfoModule { }
