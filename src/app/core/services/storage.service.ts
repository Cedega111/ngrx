import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { defaultDataServiceConfig } from '@app/store/entity-metadata';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { StorageFile } from '../interfaces/storage-file';

@Injectable()
export class StorageService extends DefaultDataService<StorageFile> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
  ) {
    super('Storage', http, httpUrlGenerator, defaultDataServiceConfig);
  }

}
