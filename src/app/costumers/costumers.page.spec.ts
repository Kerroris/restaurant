import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CostumersPage } from './costumers.page';

describe('CostumersPage', () => {
  let component: CostumersPage;
  let fixture: ComponentFixture<CostumersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
