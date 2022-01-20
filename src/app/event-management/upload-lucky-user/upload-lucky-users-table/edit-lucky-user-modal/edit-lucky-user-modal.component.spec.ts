import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLuckyUserModalComponent } from './edit-lucky-user-modal.component';

describe('EditLuckyUserModalComponent', () => {
  let component: EditLuckyUserModalComponent;
  let fixture: ComponentFixture<EditLuckyUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLuckyUserModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLuckyUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
