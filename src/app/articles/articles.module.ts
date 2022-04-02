import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles.routing.module';
import { ArticleComponent } from './components/article/article.component';
import { SharedModule } from '../_shared/_shared.module';
import { EntityDataModule, EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { ArticleEntityService } from './services/article-entity.service';
import { ArticlesResolver } from './resolvers/articles.resolver';
import { ArticlesDataService } from './services/articles-data.service';
import { StoreModule } from '@ngrx/store';
import { StorageEntityService } from './services/storage-entity.service';
const entityMetadata: EntityMetadataMap = {
  Article: {
    
  },  
  Storage: {
    
  }
};

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedModule,
  ],
  declarations: [
    ArticleComponent
  ],
  providers: [
    ArticleEntityService,
    StorageEntityService,
    ArticlesResolver,
    ArticlesDataService,
  ],
  exports: [
    ArticleComponent,
  ],
})
export class ArticlesModule {

  constructor(private eds: EntityDefinitionService,
              private entityDataService: EntityDataService,
              private articlesDataService: ArticlesDataService,
              ) {

    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Article', articlesDataService)    
  }

 }
