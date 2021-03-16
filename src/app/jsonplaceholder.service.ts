import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {

  constructor(private http:HttpClient) { }


  getTodo(): Observable<any>
  {
    const url="https://jsonplaceholder.typicode.com/todos"
    
    return this.http.get<any>(url)
  }

  postTodo(task: any): Observable<any>
  {
    const url="https://jsonplaceholder.typicode.com/todos"
    
    return this.http.post<any>(url,task)

  }
}
