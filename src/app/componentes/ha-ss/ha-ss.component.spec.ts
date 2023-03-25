import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaSSComponent } from './ha-ss.component';

describe('HaSSComponent', () => {
  let component: HaSSComponent;
  let fixture: ComponentFixture<HaSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaSSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
