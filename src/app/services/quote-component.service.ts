import { Injectable } from '@angular/core';
import { QuoteComponent } from '../models/quote.component';

@Injectable()
export class QuoteComponentService {

  getComponents(): QuoteComponent {
    return {
      components: 
      [
        {
          id: 1,
          name: "door",
          coatLevel: [
            { id: 1, name: "1" },
            { id: 2, name: "2" },
            { id: 3, name: "3" }
          ]
        },
        {
          id: 2,
          name: "wall",
          coatLevel: [
            { id: 1, name: "1" },
            { id: 2, name: "2" },
            { id: 3, name: "3" }
          ]
        }
      ]
    }
  }
}
