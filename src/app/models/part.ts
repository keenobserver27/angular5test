import { KeyValuePair } from './keyvaluepair';

export interface Part {
  id: number;
  name: string;
  coatLevel: KeyValuePair[];
};
