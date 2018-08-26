import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { navigateComponent } from './navigate/app.navigateComponent';
import { footerComponent } from './footer/app.footerComponent';
import { homeComponent } from './home/app.homeComponent';
import { formsListComponent } from './formsList/app.formsListComponent';
import { formBuilderComponent } from './formBuilder/app.formBuilderComponent';
import { FormSubmissionsComponent } from './form-submissions/form-submissions.component';
import { GenericformComponent } from './genericform/genericform.component';

@NgModule({
  declarations: [AppComponent, 
                 footerComponent, 
                 formsListComponent, 
                 navigateComponent, 
                 homeComponent,
                 formBuilderComponent,
                 FormSubmissionsComponent,
                 GenericformComponent
                ],
  imports:      [BrowserModule,
                 HttpClientModule,
                 ReactiveFormsModule,
                 FormsModule,
                 RouterModule.forRoot([
                   {
                     path: 'formsList',
                     component: formsListComponent                   
                   },
                   {
                     path: '',
                     component: homeComponent
                   },
                   {
                     path: 'formBuilder',
                     component: formBuilderComponent
                   },
                   {
                     path: 'formsSubmissions',
                     component: FormSubmissionsComponent
                   }
                   ,
                   {
                     path: 'genericForm',
                     component: GenericformComponent
                   }
                  ])  
                ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule { }
