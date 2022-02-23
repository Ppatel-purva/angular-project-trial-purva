import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeshopefooterComponent } from './coffeeshopefooter.component';

describe('CoffeeshopefooterComponent', () => {
  let component: CoffeeshopefooterComponent;
  let fixture: ComponentFixture<CoffeeshopefooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeshopefooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeshopefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
