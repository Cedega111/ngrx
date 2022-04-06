import { StorageEntityService } from '@app/core/services/storage-entity.service';
import { StorageFile } from '@app/core/interfaces/storage-file';
import { Article } from './../../../interfaces/article';
import { Component, Input, OnInit } from '@angular/core';
import { filter, first, map, Observable, take, takeWhile } from 'rxjs';

@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrls: ['./banner-item.component.scss']
})
export class BannerItemComponent implements OnInit {

  @Input() set article(value: Article) {
    if (!value) return;
    this.file$ = this.storageEntityService.entities$
    .pipe(
      map(files => files.find(file => file.id === value.previewImage)),
      first(file => !!file)
    )
  };

  file$?: Observable<StorageFile | undefined>;

  constructor(
    private storageEntityService: StorageEntityService
  ) { }

  ngOnInit() {
  }

}
