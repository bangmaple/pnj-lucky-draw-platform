import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLuckyUsersTableHelpComponent } from './upload-lucky-users-table-help.component';

describe('UploadLuckyUsersTableHelpComponent', () => {
  let component: UploadLuckyUsersTableHelpComponent;
  let fixture: ComponentFixture<UploadLuckyUsersTableHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadLuckyUsersTableHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadLuckyUsersTableHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
