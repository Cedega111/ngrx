import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './articles-list.component';
import { BannerItemComponent } from './banner-item/banner-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ArticlesListComponent,
    BannerItemComponent
  ],
  exports: [
    ArticlesListComponent,
    BannerItemComponent
  ],
})
export class ArticlesListModule { }
