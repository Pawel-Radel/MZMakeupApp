import {AfterContentInit, Component, OnInit} from '@angular/core';
import {OwlOptions, SlidesOutputData} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterContentInit {

  actualSlide: string;

  ngAfterContentInit(): void {

    setTimeout( () => {
      this.actualSlide = 'owl-slide-0'

    }, 100)
  }

  customOptions: OwlOptions = {
    autoplay: true,
    autoplaySpeed: 800,
    autoplayTimeout: 8000,
    autoHeight: true,
    autoWidth: true,
    center: true,
    slideTransition: 'linear',
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    animateIn: 'animate__animated animate__fadeIn',
    dotsSpeed: 800,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }

  changeActualSlide($event: SlidesOutputData) {

    if ($event && $event.slides) {
      if ($event.slides.length > 0) {
        this.actualSlide = <string>$event.slides?.[0].id
      }
    }
  }

}
