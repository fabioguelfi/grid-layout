import { Component } from '@angular/core';

const _template = require('./app.component.html');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get template() {
    return _template;
  }
}
