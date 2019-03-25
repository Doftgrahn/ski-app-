import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

title:string = 'Check out you height you need on your skies!';
buttonText:string = 'Check it out!';
  constructor() { }


  ngOnInit() {
  }

}
