import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  private observer: IntersectionObserver;

  ngAfterViewInit() {

    const aboutMeHtmlElement = document.getElementById('aboutMeContainer');

    this.observer = new IntersectionObserver(entries => {
      aboutMeHtmlElement.style.opacity = entries[0].intersectionRatio.toString()
    }, {
      threshold: [0.1, 0.2, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95]
    });

    this.observer.observe(aboutMeHtmlElement as HTMLElement);
  }

}
