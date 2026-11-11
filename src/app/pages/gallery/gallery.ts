import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  readonly expandedCollections = {
    moises: true,
    patata: true,
    ggmery: true,
  };

  toggleCollection(collection: keyof typeof this.expandedCollections): void {
    this.expandedCollections[collection] = !this.expandedCollections[collection];
  }

  // Guarda las imágenes en src/assets y escribe aquí sus rutas relativas.
  readonly moisesEmotes = [
    { title: 'Asombrado', alt: 'Moisés asombrado', image: 'assets/moises_asombrado_.png' },
    { title: 'Chulo', alt: 'Moisés chulo', image: 'assets/moises_chulo.png' },
    { title: 'Dubitativo', alt: 'Moisés dubitativo', image: 'assets/moises_dubitativo_.png' },
    { title: 'Ilusionado', alt: 'Moisés ilusionado', image: 'assets/moises_ilusionado.png' },
    { title: 'Pivitas', alt: 'Moisés con pivitas', image: 'assets/moises_pivitas.png' },
    { title: 'Sueño', alt: 'Moisés con sueño', image: 'assets/moises_suenyo.png' },
  ];

  readonly ggmeryEmotes = [
    { title: 'Emoticono 1', alt: 'Emoticono de GGmery 1', image: '' },
    { title: 'Emoticono 2', alt: 'Emoticono de GGmery 2', image: '' },
    { title: 'Emoticono 3', alt: 'Emoticono de GGmery 3', image: '' },
    { title: 'Emoticono 4', alt: 'Emoticono de GGmery 4', image: '' },
    { title: 'Emoticono 5', alt: 'Emoticono de GGmery 5', image: '' },
    { title: 'Emoticono 6', alt: 'Emoticono de GGmery 6', image: '' },
  ];

  readonly patataEmotes = [
    { title: 'Asombrada', alt: 'Emoticono de Patata 1', image: 'assets/patata_asombrada.png' },
    { title: 'Chula', alt: 'Emoticono de Patata 2', image: 'assets/patata_chula.png' },
    { title: 'Pensativa', alt: 'Emoticono de Patata 3', image: 'assets/patata_pensativa.png' },
    { title: 'Ilusionada', alt: 'Emoticono de Patata 4', image: 'assets/patata_ilusionada.png' },
    { title: 'Husbandos', alt: 'Emoticono de Patata 5', image: 'assets/patata_husbandos.png' },
    { title: 'Dormida', alt: 'Emoticono de Patata 6', image: 'assets/patata_dormida.png' },
  ];
}
