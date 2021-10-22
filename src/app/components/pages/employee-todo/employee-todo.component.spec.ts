import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTodoComponent } from './employee-todo.component';

describe('EmployeeTodoComponent', () => {
  let component: EmployeeTodoComponent;
  let fixture: ComponentFixture<EmployeeTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
