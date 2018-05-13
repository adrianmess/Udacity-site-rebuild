import { Injectable } from '@angular/core';
import { Form } from './form.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'


@Injectable()
export class FormService {

  forms: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
    this.forms = database.list('/fLinks/');
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

// @Injectable()
// export class FormService {
//
//   forms: FirebaseListObservable<any[]>;
//
//   constructor(private database: AngularFireDatabase) {
//     this.forms = database.list('forms');
//   }
//
//   getForms() {
//     return this.forms;
//   }
//
//   addForm(newForm: Form) {
//     this.forms.push(newForm);
//   }
//
//   getFormById(formId: string){
//   return this.database.object('forms/' + formId);
// }

  // updateForm(localUpdatedForm){
  //     var formEntryInFirebase = this.getFormById(localUpdatedForm.$key);
  //     formEntryInFirebase.update({title: localUpdatedForm.title,
  //                                 artist: localUpdatedForm.artist,
  //                                 description: localUpdatedForm.description});
  //   }

    // deleteForm(localFormToDelete){
    //     var formEntryInFirebase = this.getFormById(localFormToDelete.$key);
    //     formEntryInFirebase.remove();
    //   }

}
