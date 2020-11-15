import { Component, OnInit, Input } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { LabelComponent } from '../label/label.component';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() mode: string = 'light';

  notificationForm: FormGroup;
  notificationFormKeys: string[];

  constructor(public data: DataService) {}

  ngOnInit(): void {
    this.notificationForm = new FormGroup({
      'time-interval': new FormControl(null),
      title: new FormControl(null),
      content: new FormControl(null),
    });

    this.notificationFormKeys = Object.keys(this.notificationForm.controls);
  }

  onSubmit() {}

  toggleDarkMode() {
    if (this.mode == 'dark') {
      this.data.setMode('light');
    } else if (this.mode == 'light') {
      this.data.setMode('dark');
    } else {
      this.data.setMode('dark');
    }
  }
}
