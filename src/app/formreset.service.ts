import { Injectable } from '@angular/core';
// import { Form } from './form.model';
import {cards} from './default-cards';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'



@Injectable()
export class FormresetService {

  root: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.root = database.list('/');
}


resetForm(cards) {
    this.root.push(cards);
  }

}