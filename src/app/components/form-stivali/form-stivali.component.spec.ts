import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStivaliComponent } from './form-stivali.component';

describe('FormStivaliComponent', () => {
  let component: FormStivaliComponent;
  let fixture: ComponentFixture<FormStivaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormStivaliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStivaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
