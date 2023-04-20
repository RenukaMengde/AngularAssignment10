import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechcompComponent } from './techcomp.component';

describe('TechcompComponent', () => {
  let component: TechcompComponent;
  let fixture: ComponentFixture<TechcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
