import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventQueueViewLuckyUsersComponent } from './event-queue-view-lucky-users.component';

describe('EventQueueViewLuckyUsersComponent', () => {
  let component: EventQueueViewLuckyUsersComponent;
  let fixture: ComponentFixture<EventQueueViewLuckyUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventQueueViewLuckyUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventQueueViewLuckyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
