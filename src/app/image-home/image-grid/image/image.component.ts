import { Component, OnInit ,Input,ElementRef,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Output() imageLoaded=new EventEmitter<number>()

  imageSpan:number=0
  @Input() src:string=""

  constructor(private elementRef:ElementRef<any>) { }

  ngOnInit(): void {
  }

  runOnLoad(){

    this.imageSpan=Math.floor((<HTMLImageElement>this.elementRef.nativeElement.childNodes[0]).height/5)+1

    console.log((<HTMLImageElement>this.elementRef.nativeElement.childNodes[0]).height +" "+this.imageSpan)
    
    this.imageLoaded.emit(this.imageSpan);
  }
  
}
