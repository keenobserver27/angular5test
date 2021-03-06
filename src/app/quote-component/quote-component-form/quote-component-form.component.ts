import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  
  componentForm: FormGroup;

  @Output() selectedComponents: EventEmitter<any> = new EventEmitter();
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.componentForm = this.toFormGroup();
  }

  toFormGroup(){
    return this.fb.group({
      areaID: this.areaID,
      areaIndex: this.areaIndex
    });
  }

  passComponentData(){
    this.selectedComponents.emit(this.componentForm.value);
  }
}
