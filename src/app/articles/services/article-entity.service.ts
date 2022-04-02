import { Injectable } from "@angular/core";
import { DefaultDataServiceConfig, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Article } from "../interfaces/article";

@Injectable()
export class ArticleEntityService
     extends EntityCollectionServiceBase<Article> {

        constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {            
            super('Article', serviceElementsFactory);
        }
}