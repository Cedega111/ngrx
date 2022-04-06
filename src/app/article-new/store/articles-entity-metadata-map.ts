import { EntityMetadataMap } from '@ngrx/data';

export const articlesEntityMetadata: EntityMetadataMap = {
  Articles: {
    entityDispatcherOptions: {
      optimisticUpdate: true,
      optimisticDelete: true,
      optimisticSaveEntities: false,
      optimisticAdd: false,
      optimisticUpsert: false,
    },
  },
}