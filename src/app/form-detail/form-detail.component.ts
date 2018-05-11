import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Form } from '../form.model';
import { FormService } from '../form.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css'],
  providers: [FormService]
})
export class FormDetailComponent implements OnInit {

  // formId: number;     ------no firebase------
  formId: string;
  // formToDisplay: Form;
  formToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private formService: FormService)
    {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      // this.formId = parseInt(urlParameters['id']);
      this.formId = urlParameters['id'];
    });
    this.formToDisplay = this.formService.getFormById(this.formId);
    console.log(this.formToDisplay);
  }

}
