import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesResolver } from './resolvers/articles.resolver';


const articlesRoutes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    resolve: {
      articles: ArticlesResolver
    }
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(articlesRoutes)
  ],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
