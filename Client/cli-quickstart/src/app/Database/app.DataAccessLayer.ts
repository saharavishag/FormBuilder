import { formFieldComponent } from '../formField/app.formFieldComponent';
import * as saveForm from './saveForm.js';
import * as getFormsList from './getFormsList.js';
interface saveFormInterface
{
  (formName: string, formFields: Array<formFieldComponent>);
}
declare var saveForm: saveFormInterface;
declare var getFormsList;

export class DatabaseAccessLayer {

    saveFormFunc(formName, formFields: Array<formFieldComponent>){
        saveForm(formName, formFields);
    }
    getFormsListFunc(){        
        getFormsList();
    }
    getForm(){
    }
}