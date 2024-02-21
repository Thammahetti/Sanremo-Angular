import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfromazioniBandComponent } from './infromazioni-band.component';

describe('InfromazioniBandComponent', () => {
  let component: InfromazioniBandComponent;
  let fixture: ComponentFixture<InfromazioniBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfromazioniBandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfromazioniBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
