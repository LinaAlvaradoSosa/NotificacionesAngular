import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  apiUrl: string = 'https://notificaciones-production.up.railway.app/api';


  constructor(private http: HttpClient) { }

  sendNotification(body: any) {
    return this.http.post(`${this.apiUrl}/send-notification`, body)
  }
}  
