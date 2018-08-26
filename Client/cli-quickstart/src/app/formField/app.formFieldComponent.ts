import { Component } from '@angular/core';

@Component({
    selector: 'formField',
    templateUrl: './formFieldComponent.html',
    styleUrls: ['../app.component.css']
})
export class formFieldComponent {
  label: string;
  inputName: string;
  inputType: string;

  constructor(_label: string, _inputName: string, _inputType: string){
      this.label = _label;
      this.inputName = _inputName;
      this.inputType = _inputType;
  }
}
