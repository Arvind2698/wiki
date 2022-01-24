import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { pluck } from 'rxjs';

interface UnsplashObservableType{
  results:{
    links:{
      download:string
    },
    height:number,
    width:number
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class UnsplashApiService {

  constructor(private httpClient:HttpClient) { }

  getSerchText(text:string){
    return this.httpClient.get<UnsplashObservableType>('https://api.unsplash.com/search/photos',{
      params:{
        client_id:"mOhIgkL64HssTVcYJKdOXqyv7woLOCuvmHdnK3x5-LM",
        query:text
      }
    }).pipe(
      pluck('results')
    )
  }

}
