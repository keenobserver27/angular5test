import { CoatLevels } from './../../models/coat.level';
import { KeyValuePair } from './../../models/keyvaluepair';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

const resolvedPromise = Promise.resolve(undefined);

@Component({
  selector: 'coat',
  templateUrl: './coat.component.html',
  styleUrls: ['./coat.component.css']
})
export class CoatComponent implements OnInit {

  @Input() formArray: FormArray;

  @Input() coat: KeyValuePair;

  coatGroup: FormGroup;

  coatTypes = CoatLevels;

  index: number;

  @Output() removed = new EventEmitter();

  constructor(private fb: FormBuilder, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.coatGroup = this.toFormGroup(this.coat);

    resolvedPromise.then(() => {
      this.index = this.formArray.length;
      this.formArray.push(this.coatGroup);
  })
  }

  toFormGroup(coat: KeyValuePair) {
    return this.fb.group({
        id: coat.id,
        name: coat.name 
    });
}
}
