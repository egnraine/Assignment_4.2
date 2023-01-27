import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpViewComponent } from './imp-view.component';

describe('ImpViewComponent', () => {
  let component: ImpViewComponent;
  let fixture: ComponentFixture<ImpViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
