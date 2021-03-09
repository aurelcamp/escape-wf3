import { Component, OnInit } from '@angular/core';

interface ImageSlide {
  url: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  image1: ImageSlide = {
    url: './assets/images/escape1.jpg',
    alt: 'image escape 1',
    title: 'Une immersion parfaite',
  }

  image2: ImageSlide = {
    url: './assets/images/escape2.jpg',
    alt: 'image escape 2',
    title: 'Pour tous les niveaux',
  }

  selectedImageSlide: ImageSlide = this.image1;

  constructor() { }

  ngOnInit(): void {
    setTimeout(
      () => {
        this.selectedImageSlide = this.image2;
      }, 3000
    );    
  }

}
