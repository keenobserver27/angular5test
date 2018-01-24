import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  closeResult: string;
  form;
  /**
   *
   */
  constructor(private modalService: NgbModal) {
    this.createForm();    
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
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
      ]),
      modalText: new FormControl()
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
