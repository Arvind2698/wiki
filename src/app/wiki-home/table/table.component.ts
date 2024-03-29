import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data:{
    title:string,
    wordcount:number,
    snippet:string
  }[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
