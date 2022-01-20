import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventViewLuckyUsersComponent } from './create-event-view-lucky-users.component';

describe('CreateEventViewLuckyUsersComponent', () => {
  let component: CreateEventViewLuckyUsersComponent;
  let fixture: ComponentFixture<CreateEventViewLuckyUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEventViewLuckyUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventViewLuckyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
