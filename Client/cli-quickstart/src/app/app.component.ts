import { Component } from '@angular/core';

import { footerComponent } from './footer/app.footerComponent';
import { formsListComponent } from './formsList/app.formsListComponent';

@Component({
  selector: 'app-root',
  templateUrl: './main.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form Builder';
}
