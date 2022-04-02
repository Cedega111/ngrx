import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { compose } from "@ngrx/store";
import { filter, first, map, Observable, tap } from "rxjs";
import { ArticleEntityService } from "../services/article-entity.service";

@Injectable()
export class ArticlesResolver implements Resolve<boolean>{

    constructor(private articlesEntityService: ArticleEntityService) {

    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<boolean> {
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