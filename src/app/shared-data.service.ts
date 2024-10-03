import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private selectedEventSource = new BehaviorSubject<any>(this.getSelectedEventFromLocalStorage());
  selectedEvent$ = this.selectedEventSource.asObservable();

  // setSelectedEvent(event: any) {
  //   localStorage.setItem('selectedEvent', JSON.stringify(event)); // Store in local storage
  //   this.selectedEventSource.next(event);
  //   console.log("Shared data Service",event);

  // }

  // getSelectedEventFromLocalStorage() {
  //   console.log("hiiiiiiiiiiiiiiiii")
  //   const event = localStorage.getItem('selectedEvent');
  //   console.log("getSelectedEventFromLocalStorage ");
  //   return event ? JSON.parse(event) : null; // Retrieve from local storage
  // }



  getSelectedEventFromLocalStorage() {
    try {
      const event = localStorage.getItem('selectedEvent');
      console.log("getSelectedEventFromLocalStorage", event);
      return event ? JSON.parse(event) : null;
    } catch (error) {
      console.error("Error parsing selectedEvent from localStorage:", error);
      return null; // Return null if parsing fails
    }
  }

  
  setSelectedEvent(event: any) {
  try {
    localStorage.setItem('selectedEvent', JSON.stringify(event)); // Store in local storage
    this.selectedEventSource.next(event);
    console.log("Shared data Service", event);
  } catch (error) {
    console.error("Error saving selectedEvent to localStorage:", error);
  }
}

}
