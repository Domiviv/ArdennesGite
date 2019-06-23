import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionGiteComponent } from './edition-gite.component';

describe('EditionGiteComponent', () => {
  let component: EditionGiteComponent;
  let fixture: ComponentFixture<EditionGiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionGiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionGiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
