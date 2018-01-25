import { PartsService } from './parts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponentComponent } from './ngbd-modal-component/ngbd-modal-component.component';
import { NgbdModalContentComponent } from './ngbd-modal-content/ngbd-modal-content.component';


@NgModule({
  declarations: [
    AppComponent,
    NgbdModalComponentComponent,
    NgbdModalContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [PartsService],
  bootstrap: [AppComponent],
  entryComponents:[
    NgbdModalContentComponent
  ]
})
export class AppModule { }
