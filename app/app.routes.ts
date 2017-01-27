import { RouterConfig } from '@angular/router';

import { AboutComponent } from 'app/about.component';
import { HomeComponent } from 'app/home.component';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent }
  { path: 'about', component: AboutComponent }
]