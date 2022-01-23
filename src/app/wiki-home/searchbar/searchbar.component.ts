import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  @Output() submitted=new EventEmitter<string>()

  inputText:string='';

  constructor() { }

  ngOnInit(): void {
  }

  inputChange(e:Event){
    this.inputText=(<HTMLInputElement>e.target).value;
    console.log(this.inputText)
  }

  onFormSubmit(e:Event){
    e.preventDefault()
    // Send the final search string to the parent component
    this.submitted.emit(this.inputText)
  }
}
