import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //can be used as a tag in html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BigAssAngularApp';
  message = 'Angular is cool!'
}
