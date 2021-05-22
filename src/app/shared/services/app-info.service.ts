import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'BWF Survey Dashboard';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
