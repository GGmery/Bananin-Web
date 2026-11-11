import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // 1. Importamos las herramientas de seguridad

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements AfterViewInit {
  urlOriginal = 'https://www.youtube.com/embed/2swvBZAHIqM';
  videoUrlSegura!: SafeResourceUrl;

  // 3. Inyectamos el DomSanitizer en el constructor
  constructor(
    private sanitizer: DomSanitizer,
    private elementRef: ElementRef<HTMLElement>,
  ) {
    this.videoUrlSegura = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlOriginal);
  }

  ngAfterViewInit(): void {
    const sections = this.elementRef.nativeElement.querySelectorAll<HTMLElement>('.section');
    if (typeof IntersectionObserver === 'undefined') {
      sections.forEach(section => section.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    });

    sections.forEach(section => observer.observe(section));
  }
}
