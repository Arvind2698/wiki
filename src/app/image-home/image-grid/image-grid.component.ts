import { Component, OnInit,Input ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent implements OnInit {

  @Input()
  data: {
    links: {
      download: string;
    };
    height: number;
    width: number;
  }[]=[];

  constructor(private elementRef:ElementRef<HTMLElement>) {

   }

  ngOnInit(): void {
  }

  onImageLoad(span:number,i:number){
    // console.log(this.elementRef)
    (<HTMLElement>(<HTMLElement>this.elementRef.nativeElement.childNodes[0]).childNodes[i]).style.gridRow=`span ${span}`
    // (<HTMLElement>this.elementRef.nativeElement).style.gridRow=`span ${span}`
    // console.log('parent recived the image height'+span)
  }
}
