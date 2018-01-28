import { QuoteComponentService } from './../../services/quote-component.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'part-component-array',
  templateUrl: './part-component-array.component.html',
  styleUrls: ['./part-component-array.component.css']
})
export class PartComponentArray implements OnInit {
  
  @Input() parentForm: FormGroup;
  
  partList;
  constructor(private fb: FormBuilder, private quoteComponentService: QuoteComponentService) { }

  ngOnInit() {
    this.parentForm.addControl('components', new FormArray([]));    
    this.partList = this.quoteComponentService.getComponents().components; 
  }

}
