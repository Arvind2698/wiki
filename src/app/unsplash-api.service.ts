import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
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
        client_id:environment.unsplashAPI,
        query:text
      }
    }).pipe(
      pluck('results')
    )
  }

}
