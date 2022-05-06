import { ArticlesResolver } from './resolvers/articles.resolver';
import { Route } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const articleNewRoutes: Route[] = [
  {
    path : '',
    component: HomePageComponent,
    resolve: {
      articles: ArticlesResolver
    }
  },
];
