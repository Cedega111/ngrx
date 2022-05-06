import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'articles',
    // loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)
    loadChildren: () => import('./article-new/article-new.module').then(m => m.ArticleNewModule)
  },
  {
    path: '**', redirectTo: '/articles', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
