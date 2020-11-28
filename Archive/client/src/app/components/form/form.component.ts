import { Component, OnInit, Input } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { LabelComponent } from '../label/label.component';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() mode: string = 'light';

  notificationForm: FormGroup;
  notificationFormKeys: string[];

  constructor(public data: DataService, private http: HttpClient) {}
  headers;

  ngOnInit(): void {
    this.notificationForm = new FormGroup({
      'time-interval': new FormControl(null),
      title: new FormControl(null),
      content: new FormControl(null),
    });

    this.notificationFormKeys = Object.keys(this.notificationForm.controls);
  }

  onSubmit() {
    if (!this.data.deviceId) {
      console.log('No Device ID');
      return;
    }

    const configuration = {
      deviceId: JSON.parse(this.data.deviceId)['value'] || '',
      title: this.notificationForm.value.title || 'Title',
      content: this.notificationForm.value.content || 'Content',
      delay: this.notificationForm.value['time-interval'] || 0,
    };

    this.http.post('https://api.absolutely.cloud/fcm', configuration).subscribe(
      (data) => {
        console.log(data);
        this.notificationForm.reset();
      },
      (error) => {
        console.log('ERROR', error);
        this.notificationForm.reset();
      }
    );
  }

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
