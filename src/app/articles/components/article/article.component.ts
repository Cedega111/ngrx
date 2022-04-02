import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { forkJoin, map, merge, Observable, zip } from 'rxjs';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { Article } from '../../interfaces/article';
import { StorageFile } from '../../interfaces/storage';
import { ArticleEntityService } from '../../services/article-entity.service';
import { StorageEntityService } from '../../services/storage-entity.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {

  constructor(
    private articleService: ArticleEntityService,
    private storageService: StorageEntityService
  ) { }

  articles$: Observable<Article[]> | undefined
  storage$: Observable<StorageFile[]> | undefined
  combined$: Observable<any[]> | undefined

  ngOnInit() {
    this.articles$ = this.articleService.entities$
    this.storage$ = this.storageService.entities$
  }
}
