import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformedComponent } from './performed.component';

describe('PerformedComponent', () => {
  let component: PerformedComponent;
  let fixture: ComponentFixture<PerformedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
