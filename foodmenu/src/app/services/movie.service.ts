import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  getAllMoive(){
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTcxZTI0OTMzMjAzYzdmOGVmMDA1NzZkOGJhYzRmYiIsInN1YiI6IjY0OTM0ZGNlY2ZlNDhmMDBjNmZhMDk4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.taAloJTywUBF-sb0IlHkGltWNK92ollVwZjuJExX31A'
      }
    };


    return this.http.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
  }
}
