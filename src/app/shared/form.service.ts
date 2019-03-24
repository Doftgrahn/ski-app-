import { Injectable } from '@angular/core';

import { Type } from './type';


@Injectable({
  providedIn: 'root'
})

export class FormService {

  types: Type[] = [
    {
      id: 'Classic',
      value: ''
    },
    {
      id: 'FreeRide',
      value: ''
    }
  ];
  

  options() {
    return this.types;
  }



  /*      Custom Data
    childrenSmall: number = 0;
    childrenBigger: number = 10;
    classic: number = 20;
    freeStyle: number = 10;
    */

  constructor() { }
}
