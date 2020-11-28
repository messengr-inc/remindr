import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() controlName: string;
  @Input() form: FormGroup;
  @Input() type: string = 'text';

  constructor() {}

  ngOnInit(): void {}
}
