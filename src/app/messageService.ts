import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
  })
export class MessageService {

   constructor(public http: HttpClient) {}
   
   sendMessage(message: string) {
      return "Message from Angular Service";
   }

   private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
   getMethod(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);
    }
    
    private apiurl1 = 'https://jsonplaceholder.typicode.com/posts';
    postMethod(data:any): Observable<any[]>{
      const header = new HttpHeaders({
        contentType: "application/json"
      })
      let body ={
        userId :10
    };
      return this.http.post<any[]>(this.apiurl1, body, { headers: header });
    }
}