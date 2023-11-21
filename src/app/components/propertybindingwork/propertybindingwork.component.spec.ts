import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertybindingworkComponent } from './propertybindingwork.component';

describe('PropertybindingworkComponent', () => {
  let component: PropertybindingworkComponent;
  let fixture: ComponentFixture<PropertybindingworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertybindingworkComponent]
    });
    fixture = TestBed.createComponent(PropertybindingworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
