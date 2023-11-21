import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedloopworkComponent } from './nestedloopwork.component';

describe('NestedloopworkComponent', () => {
  let component: NestedloopworkComponent;
  let fixture: ComponentFixture<NestedloopworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedloopworkComponent]
    });
    fixture = TestBed.createComponent(NestedloopworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
