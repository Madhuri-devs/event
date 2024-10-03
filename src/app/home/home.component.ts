import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnDestroy, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { SharedDataService } from '../shared-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  @ViewChild('homeSection') homeSection!: ElementRef;
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;
  @ViewChild('signupSection') signupSection!: ElementRef;
  @ViewChild('testimonialsSection') testimonialsSection!: ElementRef;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  @ViewChild('scrollContainer1') scrollContainer1!: ElementRef;

  sidebarStatus!: boolean;
  // events: any[] = [];
  events: any[] = ['https://th.bing.com/th/id/OIP.IGyc7SU61AMg8hK1sd-XuQAAAA?w=281&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://th.bing.com/th/id/OIP._m2aPdHjvE31CFChPBVkWQHaE7?w=279&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://i.pinimg.com/originals/c8/91/f9/c891f9edec4b7c71da9300f5623e118b.jpg',
    'https://instinctmusic.com.au/wp-content/uploads/2019/01/MG_6774.jpg'
    ,'https://instinctmusic.com.au/wp-content/uploads/2019/01/MG_6774.jpg',
    'https://instinctmusic.com.au/wp-content/uploads/2019/01/MG_6774.jpg',
    'https://instinctmusic.com.au/wp-content/uploads/2019/01/MG_6774.jpg',
    'https://instinctmusic.com.au/wp-content/uploads/2019/01/MG_6774.jpg'
  ];
  cakes: any[] = [];
  categories: any[] = [];
  eventCategories: any[] = [];
  achievements: any[]=[];

  constructor(private eventService: ApiService, private sharedDataService: SharedDataService, private router: Router) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((data: any[]) => {
      this.events = data;
      this.eventCategories = data.filter(event => event.id >= 4 && event.id <= 16 || event.id == 22 || event.id == 24);
      this.cakes = this.events[20];
      this.categories = this.events.filter(event => event.id >= 17 && event.id <= 21 || event.id == 23);
      console.log("events", this.events)
      console.log("Categories", this.categories)
    });

    this.eventService.getAchievements().subscribe((data:any[])=>{
      this.achievements = data;
      console.log("achievements",this.achievements);
    })

  }


  onSelectEvent(event: any) {
    console.log("Selected event in HomeComponent:", event); // Check the event value
    if (event) {
      this.sharedDataService.setSelectedEvent(event);
      console.log("Event set in SharedDataService:", event);
      this.router.navigate(['/services']);
    } else {
      console.error("Event is undefined in onSelectEvent method.");
    }
  }
  

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({
      left: -2000, // Adjust this value as needed for scrolling distance
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 200, // Adjust this value as needed for scrolling distance
      behavior: 'smooth'
    });
  }

  // currentIndex: number = 0;

  // onScroll(event: any) {
  //   const scrollLeft = event.target.scrollLeft;
  //   const containerWidth = event.target.offsetWidth;
  //   this.currentIndex = Math.floor(scrollLeft / containerWidth);
  // }


  // scrollToIndex(index: number) {
  //   const scrollContainer = this.scrollContainer.nativeElement;
  //   const scrollAmount = scrollContainer.offsetWidth * index;
  //   scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  // }

  scrollProgress: number = 0;

  onScroll(event: any) {
    const scrollLeft = event.target.scrollLeft;
    const scrollWidth = event.target.scrollWidth - event.target.clientWidth;
    this.scrollProgress = (scrollLeft / scrollWidth) * 100;
  }


  showBottomButton: any;
  showTopButton!: boolean;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showTopButton = window.scrollY > 350;
    this.showBottomButton = ((window.document.body.scrollHeight - window.innerHeight) - window.scrollY) > 350 && this.showTopButton;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // // This method will be called when the sidebarToggle event is received
  // onSidebarToggle(status: boolean) {
  //   this.sidebarStatus = status;
  //   console.log('Sidebar status:', this.sidebarStatus);
  // }


  scrollToSection(section: string): void {
    let targetElement: HTMLElement | null = null;

    switch (section) {
      case 'home':
        targetElement = this.homeSection?.nativeElement;
        break;
      case 'testimonials':
        targetElement = this.testimonialsSection?.nativeElement;
        break;
      case 'about':
        targetElement = this.aboutSection?.nativeElement;
        break;
      case 'contact':
        targetElement = this.contactSection?.nativeElement;
        break;
      case 'signup':
        targetElement = this.signupSection?.nativeElement;
        break;
    }
  }

  //   if (targetElement) {
  //     console.log('Scrolling to:', targetElement); // Debugging log
  //     targetElement.scrollIntoView({ behavior: 'smooth' });
  //     this.sidebarStatus = false; // Close the menu after clicking
  //     const navLinks = document.querySelector('.nav-links');
  //     navLinks?.classList.remove('show');
  //   } else {
  //     console.error('Target element not found for section:', section);
  //   }
  // }

  // images: string[] = [
  //   'assets/images/event8.jpeg',
  //   // 'assets/images/event5.jpeg',
  //   'assets/images/event6.jpeg',
  //   'assets/images/event7.jpeg',
  // ];

  // currentIndex: number = 0;
  // autoSlideInterval: any;

  // nextImage(): void {
  //   this.currentIndex = (this.currentIndex + 1) % this.images.length;
  // }

  // previousImage(): void {
  //   this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  // }

  // stopAutoSlide(): void {
  //   if (!this.autoSlideInterval) { // Prevent multiple intervals
  //     this.autoSlideInterval = setInterval(() => {
  //       this.nextImage();
  //     }, 2000); // Change image every 3 seconds
  //   }
  // }

  // startAutoSlide(): void {
  //   if (this.autoSlideInterval) {
  //     clearInterval(this.autoSlideInterval);
  //     this.autoSlideInterval = null;
  //   }
  // }

  // ngOnDestroy(): void {
  //   this.stopAutoSlide(); // Clean up the interval when the component is destroyed
  // }


}
