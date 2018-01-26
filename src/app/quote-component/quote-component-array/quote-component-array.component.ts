import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Part } from '../../models/part';

@Component({
  selector: 'quote-component-array',
  templateUrl: './quote-component-array.component.html',
  styleUrls: ['./quote-component-array.component.css']
})
export class QuoteComponentArray implements OnInit {
  @Input() parentForm: FormGroup;

  @Input() components: Part[];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.parentForm.addControl('components', new FormArray([]));
  }

  addComponent(index: number) {
    this.components.push({
        id:0,
        name: '',
        coatLevel: []
    });
}
}
