import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.css']
})
export class MoviesHomeComponent implements OnInit {

  movies: any[];
  listFilter;

  constructor(private movieService: MovieService) {

    //this.listFilter='';

  }


  ngOnInit() {
    this.movieService.getDefaultMovies().subscribe(res => {
      console.log("Default Movies: ", res)
      this.movies = res.Search;
    });
  }
  getMoviesbyName()
  {

    this.movieService.getMoviesByName(this.listFilter).subscribe(res=>{

      this.movies=res.Search
    })
  }


}
