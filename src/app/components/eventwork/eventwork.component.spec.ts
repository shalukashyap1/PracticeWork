import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventworkComponent } from './eventwork.component';

describe('EventworkComponent', () => {
  let component: EventworkComponent;
  let fixture: ComponentFixture<EventworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventworkComponent]
    });
    fixture = TestBed.createComponent(EventworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
