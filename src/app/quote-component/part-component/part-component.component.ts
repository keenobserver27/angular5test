import { Part } from './../../models/part';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, FormControl } from '@angular/forms';

const resolvedPromise = Promise.resolve(undefined);

@Component({
  selector: 'part-component',
  templateUrl: './part-component.component.html',
  styleUrls: ['./part-component.component.css']
})
export class PartComponent implements OnInit {

  @Input() formArray: FormArray;

  @Input() part: Part;

  // @Input() data: Part;

  partGroup: FormGroup;

  index: number;

  constructor(private fb: FormBuilder, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.partGroup = this.toFormGroup(this.part);    
    resolvedPromise.then(() => {
      this.index = this.formArray.length;
      this.formArray.push(this.partGroup);
    });

    // this.partGroup.get('isSelected').setValue(this.data == null ? false:this.data.isSelected);
    // console.log(this.data == null ? false:this.data.isSelected);
  }

  toFormGroup(part: Part) {
    return this.fb.group({
      isSelected: false,
      partID: part.partID,
      name: part.name,
      coatLevel: 0
    });
  }

}
