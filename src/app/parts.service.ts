import { Injectable } from '@angular/core';

@Injectable()
export class PartsService {

  components : any = [
    {
      id:1,
      name: "door",
      level: [
        { id: 1, name: "1" },
        { id: 2, name: "2" },
        { id: 3, name: "3" }
      ]
    },
    {
      id:2,
      name: "wall",
      level: [
        { id: 1, name: "1" },
        { id: 2, name: "2" },
        { id: 3, name: "3" }
      ]
    }
  ];

  constructor() { }

  getparts() {
    return this.components;
  }

}
