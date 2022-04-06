import { StorageFile } from './../interfaces/storage-file';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@app/environments/environment';
import { Observable, finalize, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageEntityService extends EntityCollectionServiceBase<StorageFile> {

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private http: HttpClient,
  ) { 
    super('Storage', serviceElementsFactory);
  }

  getByKeys(ids: Array<string>): Observable<Array<StorageFile>> {
    this.setLoading(true);
    let params = new HttpParams();
    ids.forEach((id: string) => {
      params = params.append('ids', id);
    });
    if (ids.length === 0) return of([]);
    
    return this.http.get<Array<StorageFile>>(`${environment.apiUrl}storage/list`, {
      params,
    })
      .pipe(
        finalize(() => {
          this.setLoading(false);
        }),
        tap(files => {
          this.upsertManyInCache(files);
        }),
      );
  }
}
