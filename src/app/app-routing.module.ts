import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutsUsComponent } from './abouts-us/abouts-us.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutsUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'testmonials', component: TestimonialsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'gallery', component: GalleryComponent },
  { path: '**', redirectTo: '/home' },
  
];


@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
})
export class AppRoutingModule {

}
