import { Part } from './part';

export interface QuoteComponent {  
  areaIndex: number;
  areaID: number;
  components: Part[];
};