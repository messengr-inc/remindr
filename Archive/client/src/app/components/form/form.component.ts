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
    } else {
    }

    // this.headers = new HttpHeaders().set(
    //   'Authorization',
    //   'key=AAAA2_1fwSA:APA91bHH_UZuYBwM1B7O-xY5cRD7xL8p6Q7ewywo-3Ja51KSDX4Q24GBsAhjVtzKPCIU20jaFWeLNr76JJ1Z0-2FqP5xrCtGR66_Hc0g1X82fZ5Wlv_wmEKFdK7qfS1vqzSoV3TFLE_K'
    // );

    this.http.get('https://test.cokecanada.judocloud.io/').subscribe(
      (data) => console.log(data),
      (error) => {
        console.log('ERROR', error);
      }
    );

    // console.log({
    //   headers: this.headers,
    //   to: JSON.parse(this.data.deviceId)['value'],
    //   notification: {
    //     body: this.notificationForm.value.content,
    //     title: this.notificationForm.value.title,
    //     content_available: true,
    //     priority: 'high',
    //   },
    // });
    // this.http
    //   .post(
    //     'https://fcm.googleapis.com/fcm/send',
    //     {
    //       to: JSON.parse(this.data.deviceId)['value'],
    //       notification: {
    //         body: this.notificationForm.value.content,
    //         title: this.notificationForm.value.title,
    //         content_available: true,
    //         priority: 'high',
    //       },
    //     },
    //   )
    //   .subscribe(
    //     (data) => {
    //       console.log('WORKED');
    //     },
    //     (error) => {
    //       console.log('ERROR', error);
    //     }
    //   );
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
