import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import {
  Plugins,
  Capacitor,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from '@capacitor/core';

const { Device, PushNotifications } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService],
})
export class AppComponent implements OnInit {
  mode: string;
  platform: string;
  isNative: boolean;

  constructor(public data: DataService) {
    this.data.mode.subscribe((data: any) => {
      this.mode = data;
    });
    this.data.device = Device.getInfo();
    this.data.device = this.data.device.__zone_symbol__value;
    this.platform = Capacitor.platform;
    this.isNative = Capacitor.isNative;
    console.log(this.data.device);
    console.log('PLATFORM: ', Capacitor.platform);
    console.log('NATIVE: ', Capacitor.isNative);
  }

  ngOnInit() {
    PushNotifications.requestPermission().then((permission) => {
      if (permission.granted) {
        PushNotifications.register();
      }
    });

    PushNotifications.addListener(
      'registration',
      (token: PushNotificationToken) => {
        console.log('My token: ' + JSON.stringify(token));
        this.data.deviceId = JSON.stringify(token);
      }
    );

    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotification) => {
        console.log('Push received: ' + JSON.stringify(notification));
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: PushNotificationActionPerformed) => {
        const data = notification.notification.data;
        console.log(
          'Action performed: ' + JSON.stringify(notification.notification)
        );
      }
    );
  }
}
