import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() submitted=new EventEmitter<string>()

  input:string=""

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(e:Event){
    this.input=(<HTMLInputElement>e.target).value
  }

  onFormSubmit(e:Event){
    e.preventDefault()
    this.submitted.emit(this.input)
  }
}
