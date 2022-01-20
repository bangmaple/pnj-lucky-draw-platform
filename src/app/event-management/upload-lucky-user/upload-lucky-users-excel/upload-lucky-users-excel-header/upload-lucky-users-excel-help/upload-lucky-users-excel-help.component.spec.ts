import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLuckyUsersExcelHelpComponent } from './upload-lucky-users-excel-help.component';

describe('UploadLuckyUsersExcelHelpComponent', () => {
  let component: UploadLuckyUsersExcelHelpComponent;
  let fixture: ComponentFixture<UploadLuckyUsersExcelHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadLuckyUsersExcelHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadLuckyUsersExcelHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
