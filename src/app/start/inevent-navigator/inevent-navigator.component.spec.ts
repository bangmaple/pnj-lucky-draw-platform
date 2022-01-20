import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IneventNavigatorComponent } from './inevent-navigator.component';

describe('IneventNavigatorComponent', () => {
  let component: IneventNavigatorComponent;
  let fixture: ComponentFixture<IneventNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IneventNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IneventNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
