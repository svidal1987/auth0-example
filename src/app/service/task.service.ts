import { Injectable } from '@angular/core';
import { PaginateTask } from '../model/task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public httpClient : HttpClient) { }
  
  getUser(params:any) : Observable<PaginateTask> {

    console.log("https://backend-piii-24.vercel.app/api/task")
    return this.httpClient.get<PaginateTask>("https://backend-piii-24.vercel.app/api/task", {
      headers: new HttpHeaders().set('params',JSON.stringify(params))
      })
  }
}
