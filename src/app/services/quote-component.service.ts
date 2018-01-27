import { Injectable } from '@angular/core';
import { QuoteComponent } from '../models/quote.component';

@Injectable()
export class QuoteComponentService {

  

  getComponents() {
    return {
      components:[
        { partID: 1, name: 'Ceiling', coats:[
            { id: 1, name: '1' },
            { id: 2, name: '2' },
            { id: 3, name: '3' }
        ] },
        { partID: 2, name: 'Door', coats:[
            { id: 1, name: '1' },
            { id: 2, name: '2' },
            { id: 3, name: '3' }
        ] },
        { partID: 3, name: 'Wall', coats:[
            { id: 1, name: '1' },
            { id: 2, name: '2' },
            { id: 3, name: '3' }
        ] }
      ]    
    }
  }
}