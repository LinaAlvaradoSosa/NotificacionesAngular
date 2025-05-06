import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  apiURL: string = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  sendNotification(body: any) {
    return this.http.post(`${this.apiURL}/send-notification`, body)
  }
}  
