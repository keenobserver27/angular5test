import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent } from '../ngbd-modal-content/ngbd-modal-content.component';


@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './ngbd-modal-component.component.html',
  styleUrls: ['./ngbd-modal-component.component.css']
})
export class NgbdModalComponentComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
    modalRef.componentInstance.name = 'Brylle';    
  }

  ngOnInit() {
  }

}
