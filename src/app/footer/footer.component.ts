import { Component, OnInit } from '@angular/core';
import { Form } from '../form.model';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [FormService]
})
export class FooterComponent implements OnInit {

  forms: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  constructor(private router: Router, private formService: FormService) { }

  ngOnInit() {
    this.forms = this.formService.getForms();
  }

}
