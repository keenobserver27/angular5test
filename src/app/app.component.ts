import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
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
    this.getCoat();
  }
  
  onSubmit(){
    console.log('submit:');
  }

  ngOnit() {
    
  }

  onNotify(event){
   console.log("Parent Form: ", event); 
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
      ]),
      modalText: new FormControl()
    });
  }

  details(): FormArray{ return this.form.get('details') as FormArray }

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

  deleteDetail(index){
    this.details().removeAt(index);
  }  

  getCoat(){
    this.partGroup = 
      new FormGroup({
        name: new FormControl(),
        level: new FormControl()
      });
  }
}
