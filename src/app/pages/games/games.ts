import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-games',
  templateUrl: './games.html',
  styleUrls: ['./games.css']
})
export class Games implements AfterViewInit {

  ngAfterViewInit(): void {
    // Registrar plugin de GSAP
  gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.mini-card').forEach((card: any, i: number) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: i * 0.1,
        ease: 'power3.out'
      });
    });
  }
}
