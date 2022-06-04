import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sampleList = [
    {
      fontFamily: 'FR Rupp Mono',
      fontSize: 12,
      lineHeight: 1,
      letterSpacing: 0,
    },
    {
      fontFamily: 'Times',
      fontSize: 12,
      lineHeight: 1,
      letterSpacing: 0.05,
    },
  ];
}
