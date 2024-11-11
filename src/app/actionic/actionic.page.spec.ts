import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionicPage } from './actionic.page';

describe('ActionicPage', () => {
  let component: ActionicPage;
  let fixture: ComponentFixture<ActionicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
