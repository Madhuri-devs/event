import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  events: any[]=[];
  selectedImage: { filepath: string, altText: string } | null = null;

  openModal(image: { filepath: string, altText: string }) {
    this.selectedImage = image;
  }
  constructor(private eventService: ApiService, private sharedDataService: SharedDataService, private router: Router) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((data: any[]) => {
      this.events = data;
      // this.categories = this.events.products;
      // this.eventCategories = data.filter(event => event.id >= 4 && event.id <= 16 || event.id == 22 || event.id == 24);
      // this.cakes = this.events[20];
      console.log("events", this.events)
      // console.log("Categories", this.categories)
    });

  }
}
