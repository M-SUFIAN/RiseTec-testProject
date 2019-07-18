import { Injectable } from '@angular/core';

//import { IProduct } from "./product";
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private omdbNameApi = 'http://www.omdbapi.com/?s=';
  private omdbIDApi = 'http://www.omdbapi.com/?i=';
  constructor(private http: HttpClient) { }

  //observable
  getDefaultMovies(): Observable<any> {
    return this.http.get<any>(this.omdbNameApi + 'rock&apikey=f07e2ddb').pipe(
      tap(data => console.log(this.omdbNameApi + 'rock&apikey=f07e2ddb', 'All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getMoviesByName(name: string): Observable<any> {
    return this.http.get<any>(this.omdbNameApi + name + '&apikey=f07e2ddb').pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getMoviesByID(id: string): Observable<any> {
    return this.http.get<any>(this.omdbIDApi + id + '&apikey=f07e2ddb').pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }


  //exception handling
  private handleError(err: HttpErrorResponse) {
    let errorMessage = ' ';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred:${err.error.message}`;


    } else {
      errorMessage = `Server returned code:${err.status},error message is:${err.message}`;

    }
    console.error(errorMessage);
    return throwError(errorMessage);

  }

}
