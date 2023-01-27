import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetierItemComponent } from './metier-item.component';

describe('MetierItemComponent', () => {
  let component: MetierItemComponent;
  let fixture: ComponentFixture<MetierItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetierItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetierItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
