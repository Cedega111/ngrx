import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { compose } from "@ngrx/store";
import { filter, first, map, Observable, tap } from "rxjs";
import { ArticlesEntityService } from '../store/articles-entity.service';

@Injectable()
export class ArticlesResolver implements Resolve<boolean>{

    constructor(private articlesEntityService: ArticlesEntityService) {}

    resolve(): Observable<boolean> {
      return this.articlesEntityService.loaded$
      .pipe(
        tap(loaded => {
            if (!loaded) {
                this.articlesEntityService.getAll()
            }
        }),
        filter(loaded => !!loaded),
        first()
      );
    }
}