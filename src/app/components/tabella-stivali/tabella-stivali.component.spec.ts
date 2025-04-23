import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaStivaliComponent } from './tabella-stivali.component';

describe('TabellaStivaliComponent', () => {
  let component: TabellaStivaliComponent;
  let fixture: ComponentFixture<TabellaStivaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabellaStivaliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabellaStivaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
