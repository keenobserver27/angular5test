import { Part } from './part';

export interface Quote {  
customerName: string;
location: string;
details: [{
    area: number,
    areaName: string,
    length: number,
    width: number,
    parts: Part[]
  }]
};