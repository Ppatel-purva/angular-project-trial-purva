import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeshopecarausalComponent } from './coffeeshopecarausal.component';

describe('CoffeeshopecarausalComponent', () => {
  let component: CoffeeshopecarausalComponent;
  let fixture: ComponentFixture<CoffeeshopecarausalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeshopecarausalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeshopecarausalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
