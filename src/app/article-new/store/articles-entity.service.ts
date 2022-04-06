import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Article } from '../interfaces/article';

@Injectable()
export class ArticlesEntityService extends EntityCollectionServiceBase<Article> {

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) { 
    super('Articles', serviceElementsFactory);
  }

}
