import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanAlgebraComponent } from './boolean-algebra.component';

describe('BooleanAlgebraComponent', () => {
  let component: BooleanAlgebraComponent;
  let fixture: ComponentFixture<BooleanAlgebraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooleanAlgebraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanAlgebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
