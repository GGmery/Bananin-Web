import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the collaboration email and social links', () => {
    const emailLink: HTMLAnchorElement = fixture.nativeElement.querySelector('.email-card');
    const socialLinks: NodeListOf<HTMLAnchorElement> =
      fixture.nativeElement.querySelectorAll('.social-links a');

    expect(emailLink.href).toContain('mailto:losbananosdeportistas@gmail.com');
    expect(socialLinks.length).toBe(4);
    expect(fixture.nativeElement.textContent).toContain('¿Colaboramos?');
  });
});
