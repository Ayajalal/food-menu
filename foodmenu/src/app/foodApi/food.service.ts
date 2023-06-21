import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }
  getAllCatagory(){
return this.http.get('https://gunter-food-api.herokuapp.com/pizza/0')
  }}
