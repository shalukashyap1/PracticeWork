import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FremworkComponent } from './fremwork.component';

describe('FremworkComponent', () => {
  let component: FremworkComponent;
  let fixture: ComponentFixture<FremworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FremworkComponent]
    });
    fixture = TestBed.createComponent(FremworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
