import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent implements OnInit {
  @Input() onSubmit: () => void;
  @Input() mode: string = 'light';

  constructor() {}

  ngOnInit(): void {}
}
