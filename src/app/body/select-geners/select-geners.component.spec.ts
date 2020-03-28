import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGenersComponent } from './select-geners.component';

describe('SelectGenersComponent', () => {
  let component: SelectGenersComponent;
  let fixture: ComponentFixture<SelectGenersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectGenersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
