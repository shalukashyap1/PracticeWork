import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcreatwithtableComponent } from './formcreatwithtable.component';

describe('FormcreatwithtableComponent', () => {
  let component: FormcreatwithtableComponent;
  let fixture: ComponentFixture<FormcreatwithtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormcreatwithtableComponent]
    });
    fixture = TestBed.createComponent(FormcreatwithtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
