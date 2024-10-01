import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private baseUrl: string= 'http://universities.hipolabs.com/search?name=ciencias';
  private http: HttpClient = inject(HttpClient);


  getSates() {
    return this.http.get(`${this.baseUrl}`);
  }

}
