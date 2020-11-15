import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() mode: string = 'light';
  @Input() onClickFunction: () => void;

  constructor() {}

  ngOnInit(): void {}
}
