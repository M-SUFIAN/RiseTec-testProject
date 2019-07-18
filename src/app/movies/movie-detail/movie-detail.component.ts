import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  pageTitle = "Movie Detail";
  movieDetail;

  constructor(private route: ActivatedRoute, private moivieID: MovieService) { }

  ngOnInit() {

    this.moivieID.getMoviesByID(this.route.snapshot.params['id']).subscribe(res => {
      console.log("Movie Detail : ", res as JSON);
      this.movieDetail=res as JSON;
    });
    console.log(this.route.snapshot.params['id']);



  }

}
