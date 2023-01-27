import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelimViewComponent } from './prelim-view.component';

describe('PrelimViewComponent', () => {
  let component: PrelimViewComponent;
  let fixture: ComponentFixture<PrelimViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrelimViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrelimViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
