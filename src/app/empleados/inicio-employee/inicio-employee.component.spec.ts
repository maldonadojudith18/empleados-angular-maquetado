import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioEmployeeComponent } from './inicio-employee.component';

describe('InicioEmployeeComponent', () => {
  let component: InicioEmployeeComponent;
  let fixture: ComponentFixture<InicioEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
