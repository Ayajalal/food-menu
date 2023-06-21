import {Component, OnInit} from '@angular/core';
import {FoodService} from "../foodApi/food.service";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {MovieService} from "../services/movie.service";

interface onInit {
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  movies:any=[];
  constructor(private movieService:MovieService) {

  }


  ngOnInit(): void {
    console.log("hello")
    this.movieService.getAllMoive().subscribe((res:any)=>{
      console.log(res);
      this.movies=res.results;
    })

  }


}
