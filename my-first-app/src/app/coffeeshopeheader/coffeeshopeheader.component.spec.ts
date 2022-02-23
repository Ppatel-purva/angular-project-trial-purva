import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeshopeheaderComponent } from './coffeeshopeheader.component';

describe('CoffeeshopeheaderComponent', () => {
  let component: CoffeeshopeheaderComponent;
  let fixture: ComponentFixture<CoffeeshopeheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeshopeheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeshopeheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
