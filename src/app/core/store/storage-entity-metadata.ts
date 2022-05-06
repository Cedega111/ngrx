import { EntityMetadataMap } from '@ngrx/data';

export const storageEntityMetadata: EntityMetadataMap = {
  Storage: {
    entityDispatcherOptions: {
      optimisticUpdate: true,
      optimisticDelete: true,
      optimisticSaveEntities: false,
      optimisticAdd: false,
      optimisticUpsert: false,
    },
  }
}