import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioStivaleComponent } from './dettaglio-stivale.component';

describe('DettaglioStivaleComponent', () => {
  let component: DettaglioStivaleComponent;
  let fixture: ComponentFixture<DettaglioStivaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettaglioStivaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioStivaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
