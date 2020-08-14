import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentDataComponent } from './tournament-data.component';

describe('TournamentDataComponent', () => {
  let component: TournamentDataComponent;
  let fixture: ComponentFixture<TournamentDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
