import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLuckyUserComponent } from './upload-lucky-user.component';

describe('UploadLuckyUserComponent', () => {
  let component: UploadLuckyUserComponent;
  let fixture: ComponentFixture<UploadLuckyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadLuckyUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadLuckyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
