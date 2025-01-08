import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSignButtonComponent } from './google-sign-button.component';

describe('GoogleSignButtonComponent', () => {
  let component: GoogleSignButtonComponent;
  let fixture: ComponentFixture<GoogleSignButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleSignButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleSignButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
