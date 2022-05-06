import { switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageEntityService } from '@app/core/services/storage-entity.service';
import { environment } from '@app/environments/environment';
import { defaultDataServiceConfig } from '@app/store/entity-metadata';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { map, Observable, take, tap } from 'rxjs';
import { Article } from '../interfaces/article';

@Injectable()
export class ArticlesService extends DefaultDataService<Article> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private storageService: StorageEntityService
  ) {
    super('Articles', http, httpUrlGenerator, defaultDataServiceConfig);
  }

  override getAll(): Observable<Article[]> {
    return this.http.get<{
      applicationsView: Article[]
    }>(`${environment.apiUrl}articles/list`)
    .pipe(
      tap(({applicationsView}) => {
        this.storageService.keys$
        .pipe(
          take(1),
          map(keys => keys as string[]),
          switchMap((keys) => {
            const ids: string[] = applicationsView.reduce((filtered: string[], article) => {
              if (!keys.includes(article.previewImage)) {
                 filtered.push(article.previewImage);
              }
              return filtered;
            }, []);
            return this.storageService.getByKeys(ids)
          })
        ).subscribe();
      }),
      map(({applicationsView}) => applicationsView)
    )
  }

}
