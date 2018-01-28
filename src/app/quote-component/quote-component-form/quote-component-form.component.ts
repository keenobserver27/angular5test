import { QuoteComponent } from './../../models/quote.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Part } from '../../models/part';

@Component({
  selector: 'quote-component-form',
  templateUrl: './quote-component-form.component.html',
  styleUrls: ['./quote-component-form.component.css']
})
export class QuoteComponentForm implements OnInit {

  @Input()
  areaID: number;
  @Input()
  areaIndex: number;

  data: QuoteComponent;
  
  componentForm: FormGroup;

  @Output() selectedComponents: EventEmitter<any> = new EventEmitter();
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.componentForm = this.toFormGroup(this.data);
    // console.log("areaID:", this.areaID);
    // console.log("areaIndex:", this.areaIndex);
  }

  toFormGroup(data: QuoteComponent){
    return this.fb.group({
      areaID: this.areaID,
      areaIndex: this.areaIndex//,
      // components: this.components
    });
  }

  passComponentData(){
    this.selectedComponents.emit(this.componentForm.value);
  }
}
