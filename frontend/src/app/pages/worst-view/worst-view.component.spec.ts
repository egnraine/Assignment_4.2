import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorstViewComponent } from './worst-view.component';

describe('WorstViewComponent', () => {
  let component: WorstViewComponent;
  let fixture: ComponentFixture<WorstViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorstViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorstViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
