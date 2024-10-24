import { Injectable } from '@angular/core';
import { PaginaUser, User } from '../model/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient : HttpClient) { }
  
  getUser(params:any) : Observable<PaginaUser> {

    console.log("https://backend-piii-24.vercel.app/api/user")
    return this.httpClient.get<PaginaUser>("https://backend-piii-24.vercel.app/api/user", {
      headers: new HttpHeaders().set('params',JSON.stringify(params))
      })
  }

    
  addUser(user:any) : Observable<User> {

    console.log("https://backend-piii-24.vercel.app/api/user")
    return this.httpClient.post<User>("https://backend-piii-24.vercel.app/api/user", user)
  }
}
