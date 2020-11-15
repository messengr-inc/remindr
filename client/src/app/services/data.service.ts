import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _modeSubject = new Subject<any>();
  mode: Observable<any>;
  device: any;

  constructor() {
    this.mode = this._modeSubject.asObservable();
    this._modeSubject.next('dark');
  }

  setMode(value: string) {
    this._modeSubject.next(value);
  }
}
