import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { storageEntityMetadata } from './store/storage-entity-metadata';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    StorageService
  ]
})
export class CoreModule { 

  constructor(
    eds: EntityDefinitionService,
    entityDataService: EntityDataService,

    storageService: StorageService
  ) {
    eds.registerMetadataMap(storageEntityMetadata);
    entityDataService.registerServices({
      'Storage': storageService
    })
  }
}
