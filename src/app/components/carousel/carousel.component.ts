import { Component, ViewEncapsulation, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{

  ngOnInit(){
    this.updateIndex.emit(this.currentIndex);    
  }

  @Output() updateIndex = new EventEmitter<number>();

  @Input() carouselLength = 0;

  currentIndex = 0;

  slidePrev() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselLength) % this.carouselLength;
    this.updateIndex.emit(this.currentIndex);
  }

  slideNext() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselLength;
    this.updateIndex.emit(this.currentIndex);
  }
}
