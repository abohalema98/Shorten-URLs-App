
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from '../model/url';

@Injectable({
  providedIn: 'root'
})
export class CuttingService {

  cuttingUrl(url: Url) {
    const Url = {
      Url: url
    }
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')

    return this.http.post('http://localhost:8085/api/short', JSON.stringify(Url), { headers: headers })
  }

  constructor(private http: HttpClient) { }
}

