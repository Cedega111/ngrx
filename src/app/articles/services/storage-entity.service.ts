import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { StorageFile } from "../interfaces/storage";

@Injectable()
export class StorageEntityService
     extends EntityCollectionServiceBase<StorageFile> {

        constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {            
            super('Storage', serviceElementsFactory);
        }
}