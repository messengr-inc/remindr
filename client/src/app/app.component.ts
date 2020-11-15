import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Plugins, Capacitor } from '@capacitor/core';
const { Device } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService],
})
export class AppComponent {
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
    console.log(this.data.device)
    console.log('PLATFORM: ', Capacitor.platform);
    console.log('NATIVE: ', Capacitor.isNative);
  }
}
