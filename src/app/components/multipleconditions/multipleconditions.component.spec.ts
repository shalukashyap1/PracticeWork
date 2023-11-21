import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleconditionsComponent } from './multipleconditions.component';

describe('MultipleconditionsComponent', () => {
  let component: MultipleconditionsComponent;
  let fixture: ComponentFixture<MultipleconditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleconditionsComponent]
    });
    fixture = TestBed.createComponent(MultipleconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
