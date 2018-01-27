import { KeyValuePair } from './../../models/keyvaluepair';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'coat-array',
  templateUrl: './coat-array.component.html',
  styleUrls: ['./coat-array.component.css']
})
export class CoatArrayComponent implements OnInit {

  @Input() parentForm: FormGroup;

  @Input() coats: KeyValuePair[];
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.parentForm.addControl('coats', new FormArray([
      this.fb.group({
        coatLevel:''
      })
    ]));
    
    console.log(this.parentForm.controls);
  }

  // addCoat(index: number) {
  //   this.coats.push({
  //       id: 1,
  //       name: ''
  //   });
  // }
}
