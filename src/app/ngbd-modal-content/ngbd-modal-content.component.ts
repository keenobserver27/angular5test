import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { PartsService } from './../parts.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './ngbd-modal-content.component.html',
  styleUrls: ['./ngbd-modal-content.component.css']
})
export class NgbdModalContentComponent implements OnInit {

  @Input() name;
  partList;
  componentForm;

  constructor(public activeModal: NgbActiveModal, private partService: PartsService) {
    // this.createComponent();
  }

  ngOnInit() {
    this.createComponent();
    this.partList = this.partService.getparts();    
  }

  createComponent() {
    this.componentForm = new FormGroup({
    parts: new FormArray([
      new FormGroup({
        partName: new FormControl(),
        coats: new FormArray([
          new FormGroup({
            level: new FormControl()
          })
        ])
      })
    ])
  })
  }

}
