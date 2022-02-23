import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeshopelogoComponent } from './coffeeshopelogo.component';

describe('CoffeeshopelogoComponent', () => {
  let component: CoffeeshopelogoComponent;
  let fixture: ComponentFixture<CoffeeshopelogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeshopelogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeshopelogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
