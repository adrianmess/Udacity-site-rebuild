import { Injectable } from '@angular/core';
import { Form } from './form.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

@Injectable()
export class FormService {

  forms: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.forms = database.list('forms');
  }

  getForms() {
    return this.forms;
    // return this.ALBUMS;
  }

  addForm(newForm: Form) {
    this.forms.push(newForm);
  }

}
