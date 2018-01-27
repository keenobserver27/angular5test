import { QuoteComponent } from './../../models/quote.component';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'quote-component-form',
  templateUrl: './quote-component-form.component.html',
  styleUrls: ['./quote-component-form.component.css']
})
export class QuoteComponentForm implements OnInit {

  @Input()
  areaID: number;

  data: QuoteComponent;
  
  componentForm: FormGroup  
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.componentForm = this.toFormGroup(this.data);
  }

  toFormGroup(data: QuoteComponent){
    return this.fb.group({
      areaID: this.areaID
    })
  }
}
