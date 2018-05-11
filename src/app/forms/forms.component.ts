import { Component, OnInit } from '@angular/core';
import { Form } from '../form.model';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
// import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers: [FormService]
})
export class FormsComponent implements OnInit{
  // forms: Form[] = [];
  forms: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private formService: FormService) { }

  ngOnInit(){
    this.forms = this.formService.getForms();
    // console.log(this.router.url); --display url route in console

  }


  // goToDetailPage(clickedForm: Form) {    --- for local non-firebase ---
    goToDetailPage(clickedForm) {
    //old - before we got were retreiving the form key from firebase
  //   this.router.navigate(['forms', clickedForm.id]);
  this.router.navigate(['forms', clickedForm.$key]);
};
}
