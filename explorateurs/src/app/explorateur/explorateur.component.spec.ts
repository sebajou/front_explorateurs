import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorateurComponent } from './explorateur.component';

describe('ExplorateurComponent', () => {
  let component: ExplorateurComponent;
  let fixture: ComponentFixture<ExplorateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExplorateurComponent]
    });
    fixture = TestBed.createComponent(ExplorateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
