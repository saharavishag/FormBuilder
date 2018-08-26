import { Component } from '@angular/core';
import { formFieldComponent } from '../formField/app.formFieldComponent';
import { Http, Response } from '@angular/http';

@Component({
  templateUrl: './formsList.html',
  styleUrls: ['../app.component.css']
})
export class formsListComponent {
  title = 'Forms List';
  serverData: JSON;
  formsListDataJson: JSON;

  // constructor(private http: Http){

  // }

  getList(){
    // here we request the forms data from the server
    // this.http.get('http://127.0.0.1:5000').subscribe((data: Object) => {
    //   this.formsListDataJson = data as JSON;
    //   console.log(this.formsListDataJson);
    // })
  }

  getForm(){
    // here we get specific form's data and refer it to formComponent
    // in formComponent we make request to the server to get the form details
  }
  getFormSubmission(){
    // here we get specific form's submission and refer it to formSubComponent
    // with the details we get to formSubComponent and show the subs history
  }
}
