import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingEventComponent } from './creating-event.component';

describe('CreatingEventComponent', () => {
  let component: CreatingEventComponent;
  let fixture: ComponentFixture<CreatingEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatingEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
