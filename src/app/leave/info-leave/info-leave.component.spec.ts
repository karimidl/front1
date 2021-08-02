import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLeaveComponent } from './info-leave.component';

describe('InfoLeaveComponent', () => {
  let component: InfoLeaveComponent;
  let fixture: ComponentFixture<InfoLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoLeaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
