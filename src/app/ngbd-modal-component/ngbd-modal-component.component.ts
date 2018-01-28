import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent } from '../ngbd-modal-content/ngbd-modal-content.component';


@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './ngbd-modal-component.component.html',
  styleUrls: ['./ngbd-modal-component.component.css']
})
export class NgbdModalComponentComponent implements OnInit {

  @Input() areaID;
  @Input() areaName;

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
    modalRef.componentInstance.id = this.areaID;    
    modalRef.componentInstance.name = this.areaName;
    modalRef.componentInstance.notifyParent.subscribe(($e) => {
      console.log($e);
    })
  }

  ngOnInit() {
  }
}
