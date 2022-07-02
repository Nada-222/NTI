import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  pathUrl="http://localhost:3000/"
  publicUrl = "http://localhost:3000/user/"

  public isLogin : boolean = false
  public UserData : any

  constructor(private http : HttpClient) { }
  register(obj:any):Observable<any>{
    return this.http.post(`${this.publicUrl}/register` , obj)
  }
  
  login(obj:any):Observable<any>{
    return this.http.post(`${this.publicUrl}/login` , obj )
  }
}
