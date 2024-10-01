import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {

  private baseUrl = 'https://logo.clearbit.com/';

  constructor() {}

  getUrlToLogo(domain: string): string {
    return `${this.baseUrl}${domain}`;
  }
}
