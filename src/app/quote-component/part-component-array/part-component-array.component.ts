import { Parts } from './../../models/parts';
import { Quote } from './../../models/quote';
import { Part } from './../../models/part';
import { QuoteComponentService } from './../../services/quote-component.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

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
  subscription: Subscription;
  error;
  item: Quote;
  processData;
  partsData;
  partList: Parts;
  constructor(private fb: FormBuilder, private quoteComponentService: QuoteComponentService) { }

  ngOnInit() {
    this.parentForm.addControl('components', new FormArray([]));    
    this.partList = this.quoteComponentService.getComponents();
    this.getQuery();

  }

  getQuery() {
    this.subscription = this.quoteComponentService.dataItem$
     .subscribe(
       item => {
         this.item = item;
        //  console.log("Inside getquery",this.item);
         this.processData = this.item == null ? null : this.item.details.find(a => a.area == this.areaID);
         this.partsData = this.processData == null ? null : this.processData.parts;
         console.log(this.partsData);
       },
       err => this.error = err
     );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // console.log("ngOnDestroy");
  }

}
