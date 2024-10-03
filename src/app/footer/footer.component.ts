import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { SharedDataService } from '../shared-data.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  eventCategories: any[]=[];
  events: any[]=[];

  constructor(private eventService: ApiService, private sharedDataService: SharedDataService, private router: Router) { }
  
  // ngOnInit() {
  //   this.eventService.getEvents().subscribe((data: any[]) => {
  //     this.events = data;
  //     this.eventCategories = data.filter(event => event.id == 4 && event.id == 16 || event.id == 22 || event.id == 24);
  //     console.log("events", this.events)
  //     console.log("Categories", this.eventCategories)
  //   });

  // }
  // onSelectEvent(event: any) {
  //   console.log("home compo", event);
  //   this.sharedDataService.setSelectedEvent(event);
  //   console.log("returned from shared to home", event)
  //   this.router.navigate(['/services']);
  // }
}
