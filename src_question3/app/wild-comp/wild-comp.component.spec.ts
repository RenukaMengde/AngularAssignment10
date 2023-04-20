import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildCompComponent } from './wild-comp.component';

describe('WildCompComponent', () => {
  let component: WildCompComponent;
  let fixture: ComponentFixture<WildCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
