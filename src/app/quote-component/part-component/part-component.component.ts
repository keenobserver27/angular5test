import { Part } from './../../models/part';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { QuoteComponentService } from '../../services/quote-component.service';
import { Quote } from '../../models/quote';

const resolvedPromise = Promise.resolve(undefined);

@Component({
  selector: 'part-component',
  templateUrl: './part-component.component.html',
  styleUrls: ['./part-component.component.css']
})
export class PartComponent implements OnInit {

  @Input() formArray: FormArray;

  @Input() part: Part;

  @Input() areaID: number;

  partGroup: FormGroup;

  index: number;

  subscription: Subscription;
  error;
  item: Quote;
  processData;
  partsData: Part[];
  constructor(
    private fb: FormBuilder, 
    private cdRef: ChangeDetectorRef,
    private quoteComponentService: QuoteComponentService
  ) { }

  ngOnInit() {
    this.getPartsData();
    this.partGroup = this.toFormGroup(this.part);    
    resolvedPromise.then(() => {
      this.index = this.formArray.length;
      this.formArray.push(this.partGroup);
    });    
  }

  toFormGroup(part: Part) {
    return this.fb.group({
      isSelected: this.getIsSelected(this.partsData,part.partID),
      partID: part.partID,
      name: part.name,
      coatLevel: this.getCoatLevel(this.partsData, part.partID)
    });
  }

  getPartsData() {
    this.subscription = this.quoteComponentService.dataItem$
     .subscribe(
       item => {
         this.item = item;
         this.processData = this.item == null ? null : this.item.details.find(a => a.area == this.areaID);
         this.partsData = this.processData == null ? null : this.processData.parts;        
       },
       err => this.error = err
     );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getIsSelected(data: Part[], id: number): boolean {    
    if(data != null && data.find(a => a.partID == id))
      return data.find(a => a.partID == id).isSelected;
    
    return false;
  }

  getCoatLevel(data: Part[], id: number): number {    
    if(data != null && data.find(a => a.partID == id))
      return data.find(a => a.partID == id).coatLevel;
    
    return 0;
  }
}
