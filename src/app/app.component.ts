import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme: string = 'dark';

  fontSize: number = 48;
  lineHeight: number = 1.2;
  letterSpacing: number = 0;

  sampleList = [
    {
      fontFamily: 'NMTSans0600-Regular',
      fontSize: 48,
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    {
      fontFamily: 'NMTSans0600-Bold',
      fontSize: 48,
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    {
      fontFamily: 'NMTSansCondensed0600-Regular',
      fontSize: 48,
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    {
      fontFamily: 'NMTSansCondensed0600-Bold',
      fontSize: 48,
      lineHeight: 1.2,
      letterSpacing: 0,
    },
  ];

  sampleText = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmggggnopqrstuvwxyz:;,.*?!(%)[#]{@}&1234567890`;

  setTheme(theme: string) {
    this.theme = theme;
  }

  setSampleText(e: any) {
    this.sampleText = e.value;
  }

  fontSizeChanged(e: any) {
    this.fontSize = e.value;
    for (let i = 0; i < this.sampleList.length; i++) {
      this.sampleList[i].fontSize = e.value;
    }
  }

  lineHeightChanged(e: any) {
    this.lineHeight = e.value;
    for (let i = 0; i < this.sampleList.length; i++) {
      this.sampleList[i].lineHeight = e.value;
    }
  }

  letterSpacingChanged(e: any) {
    this.letterSpacing = e.value;
    for (let i = 0; i < this.sampleList.length; i++) {
      this.sampleList[i].letterSpacing = e.value;
    }
  }
}
