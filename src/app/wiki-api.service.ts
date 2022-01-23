import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, pipe, pluck } from 'rxjs';

interface WikiObservableType{
  query:{
    search:{
      title:string,
      wordcount:number,
      snippet:string
    }[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class WikiApiService {

  constructor(private httpClient:HttpClient) { }

  getSearchData(searchText:string){
    console.log("Searching for the string"+searchText)
    return this.httpClient
    .get<WikiObservableType>("https://en.wikipedia.org/w/api.php",{
      params:{
        action:"query",
        format:"json",
        list:"search",
        utf8:"8",
        srsearch:searchText,
        origin:"*"
      }
    }).pipe(
      pluck('query','search')
    )  

  }
}
