import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipe1Component } from './pipe1.component';

describe('Pipe1Component', () => {
  let component: Pipe1Component;
  let fixture: ComponentFixture<Pipe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipe1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pipe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
