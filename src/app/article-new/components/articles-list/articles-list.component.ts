import { Component, OnInit } from '@angular/core';
import { ArticlesEntityService } from '../../store/articles-entity.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  get articles$() {
    return this.articlesEntityService.entities$;
  }

  constructor(
    private articlesEntityService: ArticlesEntityService
  ) { }

  ngOnInit() {}

}
