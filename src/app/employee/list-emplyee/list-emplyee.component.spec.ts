import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmplyeeComponenet } from './list-emplyee.component';

describe('ListEmplyeeComponenet', () => {
  let component: ListEmplyeeComponenet;
  let fixture: ComponentFixture<ListEmplyeeComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmplyeeComponenet ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmplyeeComponenet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
