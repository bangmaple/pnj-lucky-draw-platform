import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventQueueSkeletonComponent } from './event-queue-skeleton.component';

describe('EventQueueSkeletonComponent', () => {
  let component: EventQueueSkeletonComponent;
  let fixture: ComponentFixture<EventQueueSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventQueueSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventQueueSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
