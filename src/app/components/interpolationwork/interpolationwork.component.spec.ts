import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationworkComponent } from './interpolationwork.component';

describe('InterpolationworkComponent', () => {
  let component: InterpolationworkComponent;
  let fixture: ComponentFixture<InterpolationworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterpolationworkComponent]
    });
    fixture = TestBed.createComponent(InterpolationworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
