import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathematicalLogicComponent } from './mathematical-logic.component';

describe('MathematicalLogicComponent', () => {
  let component: MathematicalLogicComponent;
  let fixture: ComponentFixture<MathematicalLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathematicalLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathematicalLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
