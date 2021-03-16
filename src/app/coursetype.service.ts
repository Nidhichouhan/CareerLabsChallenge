import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Courses } from './courses';
@Injectable({
  providedIn: 'root'
})
export class CoursetypeService {
  url="http://localhost:3000/Courses"
  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get<Courses[]>(this.url);
  }
}
