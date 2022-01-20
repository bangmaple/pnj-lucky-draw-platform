import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventQueueComponent } from './event-queue.component';

describe('EventQueueComponent', () => {
  let component: EventQueueComponent;
  let fixture: ComponentFixture<EventQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
