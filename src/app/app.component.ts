import { Component, ViewChild } from '@angular/core';
import { ApiService } from './api.service';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mahima Events';
  @ViewChild('homeComponent') homeComponent!: HomeComponent;

  onSectionClicked(section: string): void {
    if (this.homeComponent) {
      this.homeComponent.scrollToSection(section);
    }
  }
}
