import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About} from './pages/about/about';
import { Games } from './pages/games/games';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },          // Inicio
  { path: 'about', component: About },    // Sobre nosotros
  { path: 'games', component: Games },    // Nuestros juegos
  { path: 'contact', component: Contact }, // Contacto
  { path: '**', redirectTo: '' }                   // Ruta por defecto (404 → Inicio)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
