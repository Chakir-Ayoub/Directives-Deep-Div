import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumber=[2,4];
  oddNumber=[1,3,5];
  onlyOdd = false;
  onlyeven=false;
}
