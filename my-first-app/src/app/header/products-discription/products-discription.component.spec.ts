import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDiscriptionComponent } from './products-discription.component';

describe('ProductsDiscriptionComponent', () => {
  let component: ProductsDiscriptionComponent;
  let fixture: ComponentFixture<ProductsDiscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDiscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDiscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
