import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLuckyUsersExcelHeaderComponent } from './upload-lucky-users-excel-header.component';

describe('UploadLuckyUsersExcelHeaderComponent', () => {
  let component: UploadLuckyUsersExcelHeaderComponent;
  let fixture: ComponentFixture<UploadLuckyUsersExcelHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadLuckyUsersExcelHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadLuckyUsersExcelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
