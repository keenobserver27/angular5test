import { QuoteComponent } from './../../models/quote.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { QuoteComponentService } from '../../services/quote-component.service';

@Component({
  selector: 'quote-component-form',
  templateUrl: './quote-component-form.component.html',
  styleUrls: ['./quote-component-form.component.css']
})
export class QuoteComponentForm implements OnInit {

  data: QuoteComponent;

  componentForm: FormGroup  
  
  constructor(private fb: FormBuilder, private quoteComponentService: QuoteComponentService) { }

  ngOnInit() {
    this.data = this.quoteComponentService.getComponents();
    this.componentForm = this.toFormGroup(this.data);
  }

  toFormGroup(data: QuoteComponent){
    return this.fb.group({
      data
    })
  }
}
