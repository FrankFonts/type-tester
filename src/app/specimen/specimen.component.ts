import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-specimen',
  templateUrl: './specimen.component.html',
  styleUrls: ['./specimen.component.scss'],
})
export class SpecimenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() fontFamily: string = '';
  @Input() fontSize: number = 0;
  @Input() lineHeight: number = 0;
  @Input() letterSpacing: number = 0;

  fontSizeChanged(e: any) {
    // console.log(e.value, e.getAttribute('data-property'));
    // let property: any = e.getAttribute('data-property');
    this.fontSize = e.value;
  }

  lineHeightChanged(e: any) {
    this.lineHeight = e.value;
  }

  letterSpacingChanged(e: any) {
    this.letterSpacing = e.value;
  }
}
