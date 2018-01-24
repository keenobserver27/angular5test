import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form;
  /**
   *
   */
  constructor() {
    this.createForm();    
  }

  ngOnit() {
    
  }

  createForm() {
    this.form = new FormGroup({
      customerName: new FormControl(),
      location: new FormControl(),
      details: new FormArray([
      ])
    });
  }

  details(): FormArray{ return this.form.get('details') as FormArray }

  addDetail() {
    this.details().push(
    new FormGroup({
      area: new FormControl(),
      length: new FormControl(),
      width: new FormControl(),
      parts: new FormArray([
        new FormGroup({
          name: new FormControl(),
          level: new FormControl()
        })
      ])
    }))
  }

  deleteDetail(index){
    this.details().removeAt(index);
  }  

}
