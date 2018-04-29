import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWindowContentComponent } from './info-window-content.component';

describe('InfoWindowContentComponent', () => {
  let component: InfoWindowContentComponent;
  let fixture: ComponentFixture<InfoWindowContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoWindowContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWindowContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
