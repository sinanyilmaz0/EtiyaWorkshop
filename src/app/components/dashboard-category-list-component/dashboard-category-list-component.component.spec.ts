import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCategoryListComponentComponent } from './dashboard-category-list-component.component';

describe('DashboardCategoryListComponentComponent', () => {
  let component: DashboardCategoryListComponentComponent;
  let fixture: ComponentFixture<DashboardCategoryListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCategoryListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCategoryListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
