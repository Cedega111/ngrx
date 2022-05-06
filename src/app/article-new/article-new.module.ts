import { StoreModule } from '@ngrx/store';
import { ArticlesService } from './store/articles.service';
import { SharedModule } from '@app/shared/_shared.module';
import { NgModule } from '@angular/core';
import { ArticleNewComponent } from './article-new.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { articleNewRoutes } from './article-new.routes';
import { articlesEntityMetadata } from './store/articles-entity-metadata-map';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { ArticlesListModule } from './components/articles-list/articles-list.module';
import { ArticlesEntityService } from './store/articles-entity.service';
import { ArticlesResolver } from './resolvers/articles.resolver';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(articleNewRoutes),
    ArticlesListModule,
  ],
  declarations: [
    ArticleNewComponent,
    HomePageComponent
  ],
  providers: [
    ArticlesService,
    ArticlesEntityService,

    ArticlesResolver,
  ]
})
export class ArticleNewModule {
  constructor(
    eds: EntityDefinitionService,
    entityDataService: EntityDataService,

    articlesService: ArticlesService
  ) {
    eds.registerMetadataMap(articlesEntityMetadata);
    entityDataService.registerServices({
      'Articles': articlesService
    })
  }
 }
