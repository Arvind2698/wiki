import { Component, OnInit } from '@angular/core';

import { UnsplashApiService } from '../unsplash-api.service';

@Component({
  selector: 'app-image-home',
  templateUrl: './image-home.component.html',
  styleUrls: ['./image-home.component.scss'],
})
export class ImageHomeComponent implements OnInit {
  data: {
    links: {
      download: string;
    };
    height: number;
    width: number;
  }[]=[];

  constructor(private unsplash: UnsplashApiService) {}

  ngOnInit(): void {}

  onInputSubmit(e: string) {
    this.unsplash.getSerchText(e).subscribe((data) => {
      console.log(data)
      this.data=data
    });
  }
}
