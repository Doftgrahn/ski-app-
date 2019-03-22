import { Component, OnInit } from '@angular/core';
/**/
import { Info } from '../shared/info';
import { Type } from '../shared/type';

import { FormService } from '../shared/form.service';

@Component({
  selector: 'app-ski',
  templateUrl: './ski.component.html',
  styleUrls: ['./ski.component.scss']
})
export class SkiComponent implements OnInit {

  constructor(private formService: FormService) {
  }

  picture: string = '../../assets/ski.jpg';

  /* States for input*/
  age: number = null;
  height: number = null;
  toggleSki: string = null;

  /*Result*/
  sum: number = null;

  /*Get variables from Service*/

  get options(): Type[] {
    return this.formService.options();
  }


  /* functions for input */
  usesClassicSkies(height: number, age: number) {
    if (age > 8) {
      this.sum = height + 20;
    }
    else { this.sum = this.sum }
  }

  usesFreeride(height: number, age: number) {
    if (age > 8) {
      this.sum = height + 12.5;
    }
    else {
      this.sum = this.sum
    }
  }
  betweenZeroAndFour(height: number) {
    this.sum = height;
  }
  fiveAndEight(height: number) {
    this.sum = height + 15;
  }
  longerThanTallest() {
    this.sum = 207;
  }

  clearInputAfterSubmit(): Info {
    this.age = null;
    this.height = null;
    this.toggleSki = null;
    return this;
  }

  /* Conditionals for input */

  checkResult(age: number, height: number, toggleSki: string): Info {
    if (toggleSki == 'Classic') {
      this.usesClassicSkies(height, age)
    }
    else if (toggleSki === 'FreeRide') {
      this.usesFreeride(height, age)
    }
    else if (0 < age && age < 4 && toggleSki == null) {
      this.betweenZeroAndFour(height)
    }
    else if (5 < age && age < 8 && toggleSki == null) {
      this.fiveAndEight(height)
    } else if (age >= 207) {
      this.longerThanTallest();
    }

    this.clearInputAfterSubmit();
    return this;
  }











  ngOnInit() { }

}
