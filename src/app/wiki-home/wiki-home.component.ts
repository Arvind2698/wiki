import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { WikiApiService} from '../wiki-api.service';

@Component({
  selector: 'app-wiki-home',
  templateUrl: './wiki-home.component.html',
  styleUrls: ['./wiki-home.component.scss']
})
export class WikiHomeComponent implements OnInit {

  data:{
    title:string,
    wordcount:number,
    snippet:string
  }[]=[]

  constructor(private wikiApiService:WikiApiService) { }

  ngOnInit(): void {
  }

  getInputSearchField(str:string){
    //Call the http get service to send request to the API and store result in an array
    console.log(`input text recived in the parent component ${str}`)
    this.wikiApiService.getSearchData(str).subscribe((data)=>{
      this.data=data
    })
  }
}
