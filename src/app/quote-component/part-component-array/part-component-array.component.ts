import { Parts } from './../../models/parts';
import { Quote } from './../../models/quote';
import { Part } from './../../models/part';
import { QuoteComponentService } from './../../services/quote-component.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'part-component-array',
  templateUrl: './part-component-array.component.html',
  styleUrls: ['./part-component-array.component.css']
})
export class PartComponentArray implements OnInit {
  @Input()
  areaID: number;
  @Input()
  areaIndex: number;
  @Input() parentForm: FormGroup;
  
  error;
  item: Quote;
  processData;
  partsData;
  partList: Parts;
  constructor(private fb: FormBuilder, private quoteComponentService: QuoteComponentService) { }

  ngOnInit() {
    this.parentForm.addControl('components', new FormArray([]));    
    this.partList = this.quoteComponentService.getComponents();
    
  }

  

}
