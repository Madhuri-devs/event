import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  images = [
    { src: "assets/images/event1.jpeg", alt: 'Photo 1' },
    { src: 'assets/images/event2.jpeg', alt: 'Photo 2' },
    { src: 'assets/images/event3.jpeg', alt: 'Photo 3' },
    { src: 'assets/images/event4.jpeg', alt: 'Photo 4' },
    { src: 'assets/images/school4.jpg', alt: 'Photo 5' },
    { src: 'assets/images/school2.jpg', alt: 'Photo 6' },
    { src: 'assets/images/school3.jpg', alt: 'Photo 7' },
    { src: 'assets/images/schoollogo.jpeg', alt: 'Photo 8' },
    // { src: 'assets/images/photo9.jpeg', alt: 'Photo 9' },
    // { src: 'assets/images/photo10.jpeg', alt: 'Photo 10' },
    // { src: 'assets/images/photo11.jpeg', alt: 'Photo 11' },
    // Add more images as needed
  ];

  currentIndex = 0;

  scrollLeft() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  scrollRight() {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }
}
