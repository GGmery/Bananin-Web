import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Games } from './pages/games/games';
import { Contact } from './pages/contact/contact';
import { Gallery } from './pages/gallery/gallery';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'games', component: Games },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];
