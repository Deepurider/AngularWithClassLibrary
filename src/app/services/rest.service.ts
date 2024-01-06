import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public data = [
    'A1',
    'A1',
    'A1',
    'A1',
    'A1',
  ]
  constructor() { }

  public getData() {
    return this.data;
  }
}
