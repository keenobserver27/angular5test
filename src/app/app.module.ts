import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponentComponent } from './ngbd-modal-component/ngbd-modal-component.component';
import { NgbdModalContentComponent } from './ngbd-modal-content/ngbd-modal-content.component';
import { QuoteComponentForm } from './quote-component/quote-component-form/quote-component-form.component';
import { QuoteComponentService } from './services/quote-component.service';
import { PartComponentArray } from './quote-component/part-component-array/part-component-array.component';
import { PartComponent } from './quote-component/part-component/part-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbdModalComponentComponent,
    NgbdModalContentComponent,
    QuoteComponentForm,
    PartComponentArray,
    PartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [QuoteComponentService],
  bootstrap: [AppComponent],
  entryComponents:[
    NgbdModalContentComponent
  ]
})
export class AppModule { }
