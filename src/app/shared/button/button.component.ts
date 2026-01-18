import { Component, Input } from '@angular/core';

@Component({
  selector: 'wow-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() width: string = '';


  customWidth(width : string) {
    return 'width: '+width;
  }
}
