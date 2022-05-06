import { environment } from '@app/environments/environment';
import { DefaultDataServiceConfig, EntityMetadataMap } from '@ngrx/data';
import { Action, MetaReducer } from '@ngrx/store';
 
const entityMetadata: EntityMetadataMap = {
  Article: {},
  Storage: {}
};
 
export const entityConfig = {
  entityMetadata,
};

export const metaReducers: MetaReducer<{}, Action>[] = [];

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: `${environment.apiUrl}`,
};