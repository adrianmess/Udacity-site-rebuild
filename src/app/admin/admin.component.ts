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

  // submitForm(title: string, artist: string, description: string) {
  //   var newForm: Form = new Form(title, artist, description);
  //   this.formService.addForm(newForm);
  // }

  submitForm(FProgram: string) {
    var newForm: Form = new Form(FProgram);
    this.formService.addForm(newForm);
  }

}
