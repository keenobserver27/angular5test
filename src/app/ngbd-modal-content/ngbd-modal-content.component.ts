import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { PartsService } from './../parts.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { QuoteComponentForm } from '../quote-component/quote-component-form/quote-component-form.component';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './ngbd-modal-content.component.html',
  styleUrls: ['./ngbd-modal-content.component.css']
})
export class NgbdModalContentComponent implements OnInit {
  @Input() id;
  @Input() name;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  notify(){
    console.log('Notify clicked...');
    this.notifyParent.emit('Here is an Emit from the Child...');
    this.activeModal.close('Notify click');
  }

}
