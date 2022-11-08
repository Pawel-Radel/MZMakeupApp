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
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
    });

    this.observer.observe(aboutMeHtmlElement as HTMLElement);
  }

}
