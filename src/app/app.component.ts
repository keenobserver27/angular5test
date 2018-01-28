import { QuoteComponent } from './models/quote.component';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponentComponent } from './ngbd-modal-component/ngbd-modal-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  closeResult: string;
  form;
  partGroup;
  /**
   *
   */
  constructor(private modalService: NgbModal) {
    this.createForm();
  }

  onSubmit() {
    console.log('submit:');
  }

  ngOnit() {

  }

  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }

  onNotify(event: QuoteComponent) {
    this.clearFormArray(this.parts(event.areaIndex));
    event.components.filter(a => a.isSelected == true).forEach(a => {
      this.parts(event.areaIndex).push(new FormGroup({
        partID: new FormControl(a.partID),
        name: new FormControl(a.name),
        coatLevel: new FormControl(a.coatLevel)
      }));
    });

  }

  createForm() {
    this.form = new FormGroup({
      customerName: new FormControl(),
      location: new FormControl(),
      details: new FormArray([
        new FormGroup({
          area: new FormControl("1"),
          areaName: new FormControl("Room 1"),
          length: new FormControl(),
          width: new FormControl(),
          parts: new FormArray([
          ])
        })
      ])
    });
  }

  details(): FormArray { return this.form.get('details') as FormArray }
  parts(index): FormArray { return this.details().at(index).get('parts') as FormArray }

  addDetail() {
    this.details().push(
      new FormGroup({
        area: new FormControl(),
        areaName: new FormControl(),
        length: new FormControl(),
        width: new FormControl(),
        parts: new FormArray([

        ])
      }))
  }

  deleteDetail(index) {
    this.details().removeAt(index);
  }
}
