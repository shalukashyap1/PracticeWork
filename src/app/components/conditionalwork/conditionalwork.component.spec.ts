import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalworkComponent } from './conditionalwork.component';

describe('ConditionalworkComponent', () => {
  let component: ConditionalworkComponent;
  let fixture: ComponentFixture<ConditionalworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionalworkComponent]
    });
    fixture = TestBed.createComponent(ConditionalworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
