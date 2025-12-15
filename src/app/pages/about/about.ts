import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  countdown: string = '';

  constructor() {
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000); // actualiza cada segundo
  }

  private updateCountdown(): void {
    const endDate = new Date("2026-01-01T00:00:00");
    const now = new Date();
    const diff = endDate.getTime() - now.getTime();

    if (diff <= 0) {
      this.countdown = "¡Ya terminó la condena en ZZZ!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}
