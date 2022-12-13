import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProductsListComponentComponent } from './dashboard-products-list-component.component';

describe('DashboardProductsListComponentComponent', () => {
  let component: DashboardProductsListComponentComponent;
  let fixture: ComponentFixture<DashboardProductsListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardProductsListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProductsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
