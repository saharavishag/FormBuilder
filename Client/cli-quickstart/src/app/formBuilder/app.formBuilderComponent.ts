import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { formFieldComponent } from '../formField/app.formFieldComponent';

@Component({
  templateUrl: './formBuilder.html',
  styleUrls: ['./app.formBuilderComponent.css']
})
export class formBuilderComponent {
  title = 'Forms Builder';

  form: FormGroup;
  formFields = new Array<formFieldComponent>();
  serverData: JSON;
    
  constructor(public formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      formName: ['',[Validators.required, Validators.maxLength(20)]]
    });    
  }

  addField(_label: string, _inputName: string, _inputType: string){
    let field = new formFieldComponent(_label, _inputName,_inputType);
    this.formFields.push(field);
    console.log("added field");
    console.log(field);
  }

  onSubmit(){
    // on submit we save the form in the Database
    console.log("save form");
    console.log(this.form.value); 
    // this.httpClient.get('http://127.0.0.1:8080/').subscribe(data => {
    //   this.serverData = data as JSON;
    //   console.log(this.serverData);    })    
    this.form.reset();
  }
}
