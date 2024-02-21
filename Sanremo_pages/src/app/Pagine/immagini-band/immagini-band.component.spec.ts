import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmaginiBandComponent } from './immagini-band.component';

describe('ImmaginiBandComponent', () => {
  let component: ImmaginiBandComponent;
  let fixture: ComponentFixture<ImmaginiBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImmaginiBandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImmaginiBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
