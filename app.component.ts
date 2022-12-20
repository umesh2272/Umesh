import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngswitch';
}

class item {
  name:string;
  val:number;

}
export class AppComponent
{
  item:item[] = [{name:'one',val:1},{name:'Two',val:2},{name:'Three',val:3}];
  selectedValue:string='one';
}