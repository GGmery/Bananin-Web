import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // 1. Importamos las herramientas de seguridad

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit {
  urlOriginal = 'https://www.youtube.com/embed/2swvBZAHIqM';
  videoUrlSegura!: SafeResourceUrl;

  // 3. Inyectamos el DomSanitizer en el constructor
  constructor(private sanitizer: DomSanitizer) {
    this.videoUrlSegura = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlOriginal);
  }

  ngOnInit() {
    // Tu lógica de Scroll reveal se mantiene exactamente igual
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    document.querySelectorAll('.section').forEach(sec => observer.observe(sec));
  }
}
