import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { MovieService } from './movie.service';
import { Route } from '@angular/compiler/src/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieResolveService implements Resolve<any>  {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id=route.params['id']
   return this.movieservice.getMoviesByName(id).pipe(
map(res=>{
  return res;
})

   );
  }

  constructor(private movieservice:MovieService) { }


}
