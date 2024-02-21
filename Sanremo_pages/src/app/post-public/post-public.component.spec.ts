import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPublicComponent } from './post-public.component';

describe('PostPublicComponent', () => {
  let component: PostPublicComponent;
  let fixture: ComponentFixture<PostPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostPublicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
