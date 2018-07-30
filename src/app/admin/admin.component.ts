import { Component, OnInit } from '@angular/core';
import { Form } from '../form.model';
import { FormService } from '../form.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [FormService]
})
export class AdminComponent implements OnInit {

  constructor(private formService: FormService) { }

  ngOnInit() {
  }

  submitForm(FProgram: string, Oudacity: string, Resources: string, Programs: string, Company: string, Business: string, Support: string) {
    var newForm: Form = new Form(FProgram, Oudacity, Resources, Programs, Company, Business, Support);
    this.formService.addForm(newForm);
  }

}
