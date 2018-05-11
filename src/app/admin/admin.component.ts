import { Component, OnInit } from '@angular/core';

import { Form } from '../form.model';
import { FormService } from '../form.service';

import { Router } from '@angular/router';
//Ability to List forms
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [FormService]
})
export class AdminComponent implements OnInit {

//<----------for listing forms------------>
forms: FirebaseListObservable<any[]>;
currentRoute: string = this.router.url;

  constructor(private router: Router, private formService: FormService) { }

  ngOnInit() {
    this.forms = this.formService.getForms();
    // console.log(this.router.url); --display url route in console
  }


// ----------------Likely won't be used but added just in case-----------------
  goToDetailPage(clickedForm) {
    this.router.navigate(['forms', clickedForm.$key]);
  }
// --------------------------------------------------------------------------------

  submitForm(title: string, artist: string, description: string) {
    var newForm: Form = new Form(title, artist, description);
    this.formService.addForm(newForm);
  }

}
