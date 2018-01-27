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

  open(content, index) {
    console.log(index);
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${index}`;
      // console.log(this.closeResult);
      

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnit() {
    
  }

  createForm() {
    this.form = new FormGroup({
      customerName: new FormControl(),
      location: new FormControl(),
      details: new FormArray([
        new FormGroup({
      area: new FormControl(),
      areaName: new FormControl(),
      length: new FormControl(),
      width: new FormControl(),
      parts: new FormArray([
        // new FormGroup({
        //   name: new FormControl(),
        //   level: new FormControl()
        // })
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
        // new FormGroup({
        //   name: new FormControl(),
        //   level: new FormControl()
        // })
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
      })
  }

  getNotification(evt) {
    console.log('Message received...', evt);
  }

  getSelectedComponent(event){
    console.log(event);
  }
}
