import { Part } from './../../models/part';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
const resolvedPromise = Promise.resolve(undefined);
@Component({
  selector: 'part-component',
  templateUrl: './part-component.component.html',
  styleUrls: ['./part-component.component.css']
})
export class PartComponentComponent implements OnInit {

  @Input() formArray: FormArray;

  @Input() part: Part;

  partGroup: FormGroup;

  index: number;

  @Output() removed = new EventEmitter();
  
  constructor(private fb: FormBuilder, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.partGroup = this.toFormGroup(this.part);

    resolvedPromise.then(() => {
      this.index = this.formArray.length;
      this.formArray.push(this.partGroup);
  })
  }

  toFormGroup(part: Part) {
    return this.fb.group({
        part
    });
}
}
