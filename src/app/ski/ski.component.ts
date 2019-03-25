import { Component, OnInit } from '@angular/core';

/*interface*/
import { Type } from '../shared/type';

/*Service*/
import { FormService } from '../shared/form.service';

@Component({
  selector: 'app-ski',
  templateUrl: './ski.component.html',
  styleUrls: ['./ski.component.scss']
})
export class SkiComponent implements OnInit {

  constructor(private formService: FormService) { }

  picture: string = './assets/ski.jpg';

  /* States for input*/

  age: number = null;
  height: number = null;
  toggleSki: string = null;

  /*Result*/

  sum: number = null;

  second: number = null;

  /*Get variables from Service*/

  get options(): Type[] {
    return this.formService.options();
  }

  /* functions for input */

  betweenZeroAndFour(height: number) {
    this.sum = height;
  }
  fiveAndEight(height: number) {
    this.sum = height + 15;
    this.second = height + 20;
  }
  longerThanTallest() {
    this.sum = 207;
  }

  resetSecond() {
    this.second = null;
  }

  /**/

  usesClassicSkies(height: number, age: number) {
    if (age <= 4) {
      this.betweenZeroAndFour(height);
    }
    else if (age > 4 && age <= 8) {
      this.fiveAndEight(height);
    }
    else {
      this.sum = height + 20;
    }
    if (this.sum >= 207) {
      this.sum = 207;
    }
  }

  usesFreeride(height: number, age: number) {
    if (age <= 4) {
      this.betweenZeroAndFour(height)
    }
    else if (age > 4 && age <= 8) {
      this.sum = height + 20;
    }
    else {
      this.sum = height + 10;
      this.second = height + 15;
    }
  }

  checkResult(age: number, height: number, toggleSki: string): void {
    this.resetSecond();

    window.scrollBy({
      top: 300,
      left: 0,
      behavior: 'smooth'
    });


    if (toggleSki === 'Classic') {
      this.usesClassicSkies(height, age)
    }
    else {
      this.usesFreeride(height, age)
    }
  }

  ngOnInit() {

    this.toggleSki = this.formService.types[0].id;

  }

}
