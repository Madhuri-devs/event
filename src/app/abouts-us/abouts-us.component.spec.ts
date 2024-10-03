import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutsUsComponent } from './abouts-us.component';

describe('AboutsUsComponent', () => {
  let component: AboutsUsComponent;
  let fixture: ComponentFixture<AboutsUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutsUsComponent]
    });
    fixture = TestBed.createComponent(AboutsUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
