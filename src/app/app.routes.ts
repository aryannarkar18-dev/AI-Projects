import {Routes} from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Academics } from './academics/academics';
import { Admissions } from './admissions/admissions';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'academics', component: Academics },
  { path: 'admissions', component: Admissions },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact },
];
