import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = 'https://y3iimq84vk.execute-api.us-east-1.amazonaws.com/dev/user';  



  constructor(private http:HttpClient) { }

  public addUser(user: any) {
    return this.http.post(`${this.baseUrl}`, user);

  }
  getUserList() {
    return this.http.get(`${this.baseUrl}`);
  }
  public deleteUser(id:any)  {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }  

  public updateUser(id:any,user:any)  {
    return this.http.put(`${this.baseUrl}/${id}`,user);
  }  

  public getUserById(id:any)  {
    return this.http.get(`${this.baseUrl}/${id}`);
  } 
}