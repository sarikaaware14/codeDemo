import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
  })
export class MessageService {
    public getJsonValue: any;
    public jsonArray: any[] = [];

   constructor(public http: HttpClient) {}
   
   sendMessage(message: string) {
      return "Message from Angular Service";
   }

   private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
   getMethod(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);
    }

  
}