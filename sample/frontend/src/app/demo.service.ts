import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Message } from 'src/message.model';
import { Wish } from 'src/wish.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DemoService {
private demoUrl!:string;
  constructor(private http:HttpClient) { 
    this.demoUrl = 'https://tzhs1uyd1b.execute-api.ap-south-1.amazonaws.com/test/';
  }
  messages!:Message[];
  getGeneralMessages():Observable<any>{
    return this.http.get(this.demoUrl + 'api/messages');
  }
  getWishes():Observable<any> {
    return this.http.get(this.demoUrl + 'api/wishes');
  }
  
  getHealthStatus():Observable<any> {
    return this.http.get(this.demoUrl + 'actuator/health'); 
  }

}
