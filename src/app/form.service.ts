import { Injectable } from '@angular/core';
import { Form } from './form.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'


@Injectable()
export class FormService {

  forms: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
    this.forms = database.list('/cards/');
  }


  getForms() {
    return this.forms;
  }


  addForm(newForm: Form) {
    this.forms.push(newForm);
  }

  getFormById(formId: string){
  return this.database.object('forms/' + formId);
}

}
