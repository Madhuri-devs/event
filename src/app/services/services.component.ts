import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit{

  selectedEvent: any;
  events: any[] = [];

  constructor(private sharedDataService: SharedDataService) {}
 
  ngOnInit(): void {
    this.selectedEvent = this.sharedDataService.getSelectedEventFromLocalStorage();
    console.log("Selected event in ServicesComponent:", this.selectedEvent); // Check if it is defined
    if (!this.selectedEvent) {
      console.error("No event received in ServicesComponent.");
    }
  }
}

  // @ViewChild('scrollContainer') scrollContainer!: ElementRef;


  // scrollLeft() {
  //   this.scrollContainer.nativeElement.scrollBy({
  //     left: -300, // Adjust this value as needed for scrolling distance
  //     behavior: 'smooth'
  //   });
  // }

  // scrollRight() {
  //   this.scrollContainer.nativeElement.scrollBy({
  //     left: 300, // Adjust this value as needed for scrolling distance
  //     behavior: 'smooth'
  //   });
  // }
