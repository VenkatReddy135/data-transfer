import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  public url='assets/emp.json'

  constructor(private http:HttpClient) { }
  data(){
   return this.http.get(this.url)
  }
}
