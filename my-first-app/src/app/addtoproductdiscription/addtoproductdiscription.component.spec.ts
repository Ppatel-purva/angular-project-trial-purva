import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtoproductdiscriptionComponent } from './addtoproductdiscription.component';

describe('AddtoproductdiscriptionComponent', () => {
  let component: AddtoproductdiscriptionComponent;
  let fixture: ComponentFixture<AddtoproductdiscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtoproductdiscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtoproductdiscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
