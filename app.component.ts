import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngclassstyleapp';

  bgColor = true;
  txtColor = true;

  //currentClasses: {};
   currentClasses!: {};
   currentStyles!: {};

  setCurrentClasses() {
    this.currentClasses = {
      'bgcolor': this.bgColor,
      'txtcolor': !this.txtColor
    };
  }

  setCurrentStyle() {
    this.currentStyles = {
      'background-color': this.bgColor ? 'blue' : 'transparent',
      'color': !this.txtColor ? 'black' : 'white'
    };
  }
}
