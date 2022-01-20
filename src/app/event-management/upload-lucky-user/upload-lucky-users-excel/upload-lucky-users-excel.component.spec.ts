import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLuckyUsersExcelComponent } from './upload-lucky-users-excel.component';

describe('UploadLuckyUsersExcelComponent', () => {
  let component: UploadLuckyUsersExcelComponent;
  let fixture: ComponentFixture<UploadLuckyUsersExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadLuckyUsersExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadLuckyUsersExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
