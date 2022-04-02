import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator, MergeStrategy } from "@ngrx/data";
import { firstValueFrom, lastValueFrom, map, Observable, switchMap, take, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { Article } from "../interfaces/article";
import { StorageFile } from "../interfaces/storage";
import { StorageEntityService } from "./storage-entity.service";

@Injectable()
export class ArticlesDataService extends DefaultDataService<Article>{

        constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, private storageEntityService: StorageEntityService) {
        super('Article', http, httpUrlGenerator)
    }    
    
    override getAll(): Observable<Article[]> {
        return this.http.get(environment.apiUrl + 'articles/list')
            .pipe(
                map((values: any) => values["applicationsView"]),
                tap(articles => {
                    const idsArray = articles.map((img: Article) => img.previewImage)
                    return this.getImages(idsArray)
                    .pipe(
                       tap(images => this.storageEntityService.addAllToCache(images)),
                    ).subscribe() //пожалуйста, дядя Антон, пощадите
                }
            )
        )
    }

     getImages(ids: string[]): Observable<StorageFile[]> { 
        let params = new HttpParams();
        ids.forEach((id:string) => {
          params = params.append('ids', id);
        });
        return this.http.get<Array<StorageFile>>(`${environment.apiUrl}storage/list`, { params })
      }
}

// getStorage(): Observable<StorageFile[]> {
//     return this.articleService.entities$
//         .pipe(
//             map((values: any) => values["previewImage"]),
//             switchMap(images => {
//                 return this.getImages(images) 
//             }) 
//         )

    // return this.http.get(environment.apiUrl + 'articles/list')
    //     .pipe(
    //         map((res: any) => res["applicationsView"]),
    //         tap(articles => {
    //            return this.getImages(articles.map((x: Article) => x.previewImage))
    //            .pipe(
    //                map(image => image.map(value => this.storageEntityService.add(value)))
    //            )
    //         }
    //     )
    // )
// }