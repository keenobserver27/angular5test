import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { QuoteComponent } from '../models/quote.component';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Parts } from '../models/parts';

@Injectable()
export class QuoteComponentService {

  private currentComponentSubject = new BehaviorSubject<any>({} as any);
  public currentComponent = this.currentComponentSubject.asObservable().pipe(distinctUntilChanged());

  getComponentData(){
    return this.currentComponentSubject.value;
  }

  // Observable navItem source
  private _dataSource = new BehaviorSubject<any>(null);

  // Observable navItem stream
  dataItem$ = this._dataSource.asObservable();

  changeData(query: any) {
    this._dataSource.next(query);
    // console.log("Inside changeNav",query );
  }
  
  getComponents(): Parts {
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
