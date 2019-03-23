import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'lets ski';
  toggle: boolean = false;

  hamburger() {
    this.toggle = !this.toggle
  }
  
  toggleOff() {
    this.toggle = false;
  }
}
