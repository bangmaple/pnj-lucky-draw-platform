import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLuckyUsersExcelBodyComponent } from './upload-lucky-users-excel-body.component';

describe('UploadLuckyUsersExcelBodyComponent', () => {
  let component: UploadLuckyUsersExcelBodyComponent;
  let fixture: ComponentFixture<UploadLuckyUsersExcelBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadLuckyUsersExcelBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadLuckyUsersExcelBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
