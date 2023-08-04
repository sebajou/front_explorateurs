import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorateurDetailComponent } from './explorateur-detail.component';

describe('ExplorateurDetailComponent', () => {
  let component: ExplorateurDetailComponent;
  let fixture: ComponentFixture<ExplorateurDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExplorateurDetailComponent]
    });
    fixture = TestBed.createComponent(ExplorateurDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
