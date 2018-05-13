import { Component, Input, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
  providers: [FormService]
})
export class EditFormComponent implements OnInit {
  @Input() selectedForm;
    constructor(private formService: FormService) { }

  ngOnInit() {
  }

  // beginUpdatingForm(formToUpdate){
  //     this.formService.updateForm(formToUpdate);
  //   }
  //
  //   beginDeletingForm(formToDelete){
  //       if(confirm("Are you sure you want to delete this item from the inventory?")){
  //         this.formService.deleteForm(formToDelete);
  //       }
  //     }

}
