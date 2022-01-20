import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLuckyUsersTableComponent } from './upload-lucky-users-table.component';

describe('UploadLuckyUsersTableComponent', () => {
  let component: UploadLuckyUsersTableComponent;
  let fixture: ComponentFixture<UploadLuckyUsersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadLuckyUsersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadLuckyUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
